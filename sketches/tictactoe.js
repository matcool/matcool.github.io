function tictactoeSketch(sketch) {

	var grid;
	var turn = 'X';
	var ai = true;
	var s = 166;
	var gameend = false;

	sketch.setup = () => {
		sketch.createCanvas(500, 500);

		grid = Array(9).fill('');
	}

	sketch.draw = () => {
		sketch.background(255);

		if (turn == 'O' && !isTie()) {
			var i = Math.floor(sketch.random(10));
			while (grid[i] !== '') {
				i = Math.floor(sketch.random(10));

			}
			grid[i] = 'O';
			turn = 'X';
		}
		drawGrid();


		if (checkWin()) {
			var w = checkWin();
			sketch.noLoop();
			gameend = true;
			sketch.stroke(255, 0, 0);
			sketch.strokeWeight(10);
			var p1 = getIndexPos(w[1][0]);
			var p2 = getIndexPos(w[1][2]);
			sketch.line(p1[0] * s + s / 2, p1[1] * s + s / 2, p2[0] * s + s / 2, p2[1] * s + s / 2);
			sketch.createP(w[0] + " HAS WON !!! YAY;")
		} else if (isTie()) {
			sketch.noLoop();
			sketch.background(150, 0, 0);
			drawGrid();
			sketch.createP("EPIC TIE.");
			gameend = true;

		}
	}

	sketch.mousePressed = () => {
		if (mouseOutsideCanvas())
			return;
		if (gameend) {
			grid = Array(9).fill('');
			turn = 'X';
			sketch.loop();
			sketch.canvas.nextSibling.remove();
			gameend = false;
			return
		}
		var nextTurn = (turn == 'X') ? 'O' : 'X';
		var gridX = sketch.abs(sketch.floor(sketch.mouseX / s));
		var gridY = sketch.abs(sketch.floor(sketch.mouseY / s));
		var i = gridY * 3 + gridX;
		if (grid[i] !== '')
			return;
		grid[i] = turn;
		turn = nextTurn;

	}

	function checkWin() {
		var patterns = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6]
		];
		var epic = pat => {
			return (grid[pat[0]] == grid[pat[1]] && grid[pat[1]] == grid[pat[2]] && grid[pat[0]] !== '')
		}
		for (var p of patterns) {
			if (epic(p)) {
				return [grid[p[0]], p]
			}
		}
		return false;
	}

	function drawGrid() {
		sketch.stroke(0);
		sketch.strokeWeight(2);
		sketch.noFill();
		var x = 0;
		var y = 0;
		for (var g of grid) {
			if (g == "X") {
				sketch.line(x * s, y * s, x * s + s, y * s + s);
				sketch.line(x * s + s, y * s, x * s, y * s + s);
			} else if (g == "O") {
				sketch.ellipse(x * s + s / 2, y * s + s / 2, s - 10);
			}

			x++;
			if (x == 3) {
				x = 0;
				y++;
			}
		}

		sketch.line(s, 0, s, sketch.height);
		sketch.line(s * 2, 0, s * 2, sketch.height);
		sketch.line(0, s, sketch.width, s);
		sketch.line(0, s * 2, sketch.width, s * 2);
	}

	function mouseOutsideCanvas() {
		return (sketch.mouseX < 0 || sketch.mouseX > sketch.width || sketch.mouseY < 0 || sketch.mouseY > sketch.height);
	}

	function getIndexPos(i) {
		return [i % 3, Math.floor(i / 3)];
	}

	function isTie() {
		return (grid.every(i => (i !== '')))
	}
}

myp5 = new p5(tictactoeSketch, 'card-canvas');