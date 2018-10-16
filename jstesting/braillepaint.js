function brailleSketch(sketch) {

	var grid = [];
	var genButton;
	var textP;
	var inverted = false;
	var tButton;
	var bSize = 3;
	var cButton;

	sketch.setup = () => {
		sketch.createCanvas(500, 500);
		genButton = sketch.createButton('generate');
		tButton = sketch.createButton('invert');
		cButton = sketch.createButton('clear');
		textP = sketch.createP('hello!');
		genButton.mouseClicked(genBraille);
		tButton.mouseClicked(toggleV);
		cButton.mouseClicked(resetG);
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
			grid[gridmx][gridmy] = false;
			for (var xx = -Math.floor(bSize / 2); xx < Math.floor(bSize / 2); xx++) {
				for (var yy = -Math.floor(bSize / 2); yy < Math.floor(bSize / 2); yy++) {
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
		for (var y = 0; y < grid[0].length; y += 3) {
			for (var x = 0; x < grid.length; x += 2) {
				var surround = '';
				if (inverted) {
					surround += grid[x][y].toString().charAt(0);
					surround += grid[x + 1][y].toString().charAt(0);
					surround += grid[x][y + 1].toString().charAt(0);
					surround += grid[x + 1][y + 1].toString().charAt(0);
					surround += grid[x][y + 2].toString().charAt(0);
					surround += grid[x + 1][y + 2].toString().charAt(0);
				} else {
					surround += (!grid[x][y]).toString().charAt(0);
					surround += (!grid[x + 1][y]).toString().charAt(0);
					surround += (!grid[x][y + 1]).toString().charAt(0);
					surround += (!grid[x + 1][y + 1]).toString().charAt(0);
					surround += (!grid[x][y + 2]).toString().charAt(0);
					surround += (!grid[x + 1][y + 2]).toString().charAt(0);
				}
				switch (surround) {
					case 'ffffff':
						finalText += '⠀';
						break;
					case 'tfffff':
						finalText += '⠁';
						break;
					case 'fftfff':
						finalText += '⠂';
						break;
					case 'tftfff':
						finalText += '⠃';
						break;
					case 'fffftf':
						finalText += '⠄';
						break;
					case 'tffftf':
						finalText += '⠅';
						break;
					case 'fftftf':
						finalText += '⠆';
						break;
					case 'tftftf':
						finalText += '⠇';
						break;
					case 'ftffff':
						finalText += '⠈';
						break;
					case 'ttffff':
						finalText += '⠉';
						break;
					case 'fttfff':
						finalText += '⠊';
						break;
					case 'tttfff':
						finalText += '⠋';
						break;
					case 'ftfftf':
						finalText += '⠌';
						break;
					case 'ttfftf':
						finalText += '⠍';
						break;
					case 'fttftf':
						finalText += '⠎';
						break;
					case 'tttftf':
						finalText += '⠏';
						break;
					case 'ffftff':
						finalText += '⠐';
						break;
					case 'tfftff':
						finalText += '⠑';
						break;
					case 'ffttff':
						finalText += '⠒';
						break;
					case 'tfttff':
						finalText += '⠓';
						break;
					case 'fffttf':
						finalText += '⠔';
						break;
					case 'tffttf':
						finalText += '⠕';
						break;
					case 'fftttf':
						finalText += '⠖';
						break;
					case 'tftttf':
						finalText += '⠗';
						break;
					case 'ftftff':
						finalText += '⠘';
						break;
					case 'ttftff':
						finalText += '⠙';
						break;
					case 'ftttff':
						finalText += '⠚';
						break;
					case 'ttttff':
						finalText += '⠛';
						break;
					case 'ftfttf':
						finalText += '⠜';
						break;
					case 'ttfttf':
						finalText += '⠝';
						break;
					case 'fttttf':
						finalText += '⠞';
						break;
					case 'tttttf':
						finalText += '⠟';
						break;
					case 'ffffft':
						finalText += '⠠';
						break;
					case 'tfffft':
						finalText += '⠡';
						break;
					case 'fftfft':
						finalText += '⠢';
						break;
					case 'tftfft':
						finalText += '⠣';
						break;
					case 'fffftt':
						finalText += '⠤';
						break;
					case 'tffftt':
						finalText += '⠥';
						break;
					case 'fftftt':
						finalText += '⠦';
						break;
					case 'tftftt':
						finalText += '⠧';
						break;
					case 'ftffft':
						finalText += '⠨';
						break;
					case 'ttffft':
						finalText += '⠩';
						break;
					case 'fttfft':
						finalText += '⠪';
						break;
					case 'tttfft':
						finalText += '⠫';
						break;
					case 'ftfftt':
						finalText += '⠬';
						break;
					case 'ttfftt':
						finalText += '⠭';
						break;
					case 'fttftt':
						finalText += '⠮';
						break;
					case 'tttftt':
						finalText += '⠯';
						break;
					case 'ffftft':
						finalText += '⠰';
						break;
					case 'tfftft':
						finalText += '⠱';
						break;
					case 'ffttft':
						finalText += '⠲';
						break;
					case 'tfttft':
						finalText += '⠳';
						break;
					case 'fffttt':
						finalText += '⠴';
						break;
					case 'tffttt':
						finalText += '⠵';
						break;
					case 'fftttt':
						finalText += '⠶';
						break;
					case 'tftttt':
						finalText += '⠷';
						break;
					case 'ftftft':
						finalText += '⠸';
						break;
					case 'ttftft':
						finalText += '⠹';
						break;
					case 'ftttft':
						finalText += '⠺';
						break;
					case 'ttttft':
						finalText += '⠻';
						break;
					case 'ftfttt':
						finalText += '⠼';
						break;
					case 'ttfttt':
						finalText += '⠽';
						break;
					case 'fttttt':
						finalText += '⠾';
						break;
					case 'tttttt':
						finalText += '⠿';
						break;
				}
			}
			finalText += '<br>';
		}
		textP.html(finalText);
	}
}

myp5 = new p5(brailleSketch, 'card-canvas');