function brailleSketch(sketch) {

	var grid = [];
	var inverted = false;
	var bSize = 1;
	var cButton;

	sketch.setup = () => {
		sketch.createCanvas(500, 500);
		var genButton = sketch.createElement('a','generate');
		var tButton = sketch.createElement('a','invert');
		var cButton = sketch.createElement('a','clear');
		textP = sketch.createElement('p','hello!');
		textP.style('font-family','Iosevka Web');
		textP.style('line-height','80%');
		genButton.mouseClicked(genBraille);
		genButton.class('waves-effect waves-light btn');
		tButton.mouseClicked(toggleV);
		tButton.class('waves-effect waves-light btn');
		cButton.mouseClicked(resetG);
		cButton.class('waves-effect waves-light btn');
		//pixelDensity(1);
		resetG();
	}

	function resetG() {
		var s = sketch.width / 10;
		for (var x = 0; x < s; x++) {
			grid[x] = [];
			for (var y = 0; y < s + 1; y++) {
				grid[x][y] = true;
			}
		}
	}

	sketch.draw = () => {
		sketch.background(100)
		sketch.noStroke();
		//fill(255);
		sketch.ellipseMode(sketch.CORNER);
		var spc = 10;
		var gridmx = Math.floor(sketch.constrain(sketch.mouseX / (sketch.width / grid.length), 0, grid.length - 1));
		var gridmy = Math.floor(sketch.constrain(sketch.mouseY / (sketch.width / grid.length), 0, grid.length - 1));
		var offscreen = sketch.mouseX > sketch.width || sketch.mouseY > sketch.height;
		for (var x = 0; x < grid.length; x++) {
			for (var y = 0; y < grid[0].length; y++) {
				if (!grid[x][y]) {
					if (x == gridmx && y == gridmy) {
						sketch.fill(0, 255, 0);
					} else {
						sketch.fill(255);
					}
					sketch.ellipse(x * spc + 2.5, y * spc + 2.5, spc / 2, spc / 2);
				} else if (x == gridmx && y == gridmy) {
					sketch.fill(255, 0, 0, 50);
					sketch.ellipse(x * spc + 2.5, y * spc + 2.5, spc / 2, spc / 2);
				}
			}
		}
		if (sketch.mouseIsPressed && !offscreen) {
			//grid[gridmx][gridmy] = false;
			for (var xx = -bSize; xx < bSize; xx++) {
				for (var yy = -bSize; yy < bSize; yy++) {
					if (gridmx + xx < grid.length && gridmx + xx > 0 && gridmy + yy < grid[0].length && gridmy + yy > 0) {
						grid[gridmx + xx][gridmy + yy] = false;
					}
				}
			}
		}
		//rect(gridmx*spc,gridmy*spc,10,10);
		//rect(gridmx,gridmy,10,10);
	}

	function toggleV() {
		inverted = !inverted;
	}

	function genBraille() {
		var finalText = '';
		let checks = [[1,2],[1,1],[1,0],[0,2],[0,1],[0,0]];
		for (var y = 0; y < grid[0].length; y += 3) {
			for (var x = 0; x < grid.length; x += 2) {
				var surround = checks.map(i => grid[x+i[0]][y+i[1]] ^ inverted ? 0 : 1).join('');
				finalText += eval(`"\\u${(0x2800+parseInt(surround,2)).toString(16)}"`);
			}
			finalText += '<br>';
		}
		textP.html(finalText);
	}
}

myp5 = new p5(brailleSketch, 'card-canvas');