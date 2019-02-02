function brailleSketch(sketch) {

	let grid;
	let gw = 60;
	let gh = 64;
	let sx, sy;
	let inverted = false;
	let bSize = 1;
	let cButton;
	let textP;
	let tool = 'brush';


	sketch.setup = () => {
		sketch.createCanvas(500, 500);
		resetG();
		sx = sketch.width / gw;
		sy = sketch.height / gh;

		let genButton = sketch.createElement('a', 'generate');
		let tButton = sketch.createElement('a', 'invert');
		let cButton = sketch.createElement('a', 'clear');
		textP = sketch.createElement('p', 'hello!');
		textP.style('font-family', 'Iosevka Web');
		textP.style('line-height', '100%');
		genButton.mouseClicked(genBraille);
		tButton.mouseClicked(toggleV);
		cButton.mouseClicked(resetG);
		genButton.class('waves-effect waves-light btn');
		tButton.class('waves-effect waves-light btn');
		cButton.class('waves-effect waves-light btn');
	}

	function resetG() {
		grid = Array(gh).fill(0).map(i => Array(gw).fill(0));
	}

	function mouseOob() {
		return sketch.mouseX < 0 || sketch.mouseX > sketch.width || sketch.mouseY < 0 || sketch.mouseY > sketch.height
	}

	function toggleV() {
		inverted = !inverted;
	}

	sketch.draw = () => {
		sketch.background(100)
		sketch.noStroke();
		sketch.fill(255);
		sketch.ellipseMode(sketch.CORNER);
		for (let y = 0; y < gh; y++) {
			for (let x = 0; x < gw; x++) {
				let p = grid[y][x];
				if (p) {
					sketch.ellipse(x * sx, y * sy, sx, sy);
				}
			}
		}
		let gmx = Math.floor(sketch.mouseX / sx);
		let gmy = Math.floor(sketch.mouseY / sy);
		if (sketch.mouseIsPressed && !mouseOob()) {
			switch (tool) {
				case 'brush':
					paint(gmx, gmy);
				case 'eraser':
					paint(gmx, gmy, true);
			}
		}
	}

	function paint(x, y, erase = false) {
		let t = erase ? 1 : 0
		if (bSize == 0) {
			grid[y][x] = t;
		} else {
			for (let j = -bSize; j <= bSize; j++) {
				for (let i = -bSize; i <= bSize; i++) {
					if (y + j >= 0 && y + j < gh && x + i >= 0 && x + i < gw) grid[y + j][x + i] = t;
				}
			}
		}
	}

	function genBraille() {
		let finalText = '';
		let checks = [
			[1, 3],
			[0, 3],
			[1, 2],
			[1, 1],
			[1, 0],
			[0, 2],
			[0, 1],
			[0, 0]
		];
		for (let y = 0; y < gh; y += 4) {
			for (let x = 0; x < gw; x += 2) {
				let tile = checks.map(i => grid[y + i[1]][x + i[0]] == inverted ? 0 : 1).join('');
				finalText += String.fromCharCode(0x2800 + parseInt(tile, 2));
			}
			finalText += '<br>';
		}
		textP.html(finalText);
	}
}

myp5 = new p5(brailleSketch, 'card-canvas');