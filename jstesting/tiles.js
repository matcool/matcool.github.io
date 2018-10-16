function tilesSketch(sketch) {

	let tiles = [];
	let rows = 10;
	let cols = rows;
	let s;

	sketch.setup = function() {
		let canvas = sketch.createCanvas(500, 500);
		for (let j = 0; j < cols; j++) {
			let row = []
			for (let i = 0; i < rows; i++) {
				row.push(false)
			}
			tiles.push(row);
		}
		s = sketch.width / rows;

		sketch.strokeWeight(2);
	}

	sketch.draw = function() {
		connect();
		//sketch.background('#505050');
		sketch.clear();
		sketch.fill('#c0c0c0');
		for (let j = 0; j < cols; j++) {
			for (let i = 0; i < rows; i++) {
				if (tiles[j][i] != false) {
					sketch.noStroke();
					sketch.rect(i * s, j * s, s, s);
					sketch.stroke(0);
					if (!tiles[j][i][0]) sketch.line(i * s, j * s, i * s + s, j * s);
					if (!tiles[j][i][1]) sketch.line(i * s, j * s + s, i * s + s, j * s + s);
					if (!tiles[j][i][2]) sketch.line(i * s, j * s, i * s, j * s + s);
					if (!tiles[j][i][3]) sketch.line(i * s + s, j * s, i * s + s, j * s + s);
				}
			}
		}
	}

	sketch.mousePressed = function() {
		if (mouseOutsideCanvas()) return;
		let tileX = Math.floor(sketch.mouseX / s);
		let tileY = Math.floor(sketch.mouseY / s);
		tiles[tileY][tileX] = !tiles[tileY][tileX];
	}

	sketch.mouseDragged = function() {
		if (mouseOutsideCanvas()) return;
		let tileX = Math.floor(sketch.mouseX / s);
		let tileY = Math.floor(sketch.mouseY / s);
		tiles[tileY][tileX] = true;
	}

	function connect(j, i) {
		for (let j = 0; j < cols; j++) {
			for (let i = 0; i < rows; i++) {
				if (tiles[j][i] != false) {
					let newtile = []
					newtile[0] = j > 0 && tiles[j - 1][i] != false;
					newtile[1] = j < cols - 1 && tiles[j + 1][i] != false;
					newtile[2] = i > 0 && tiles[j][i - 1] != false;
					newtile[3] = i < rows - 1 && tiles[j][i + 1] != false;
					tiles[j][i] = newtile;
				}
			}
		}
	}

	function mouseOutsideCanvas() {
		return (sketch.mouseX < 0 || sketch.mouseX > sketch.width || sketch.mouseY < 0 || sketch.mouseY > sketch.height);
	}
}

myp5 = new p5(tilesSketch, 'card-canvas');