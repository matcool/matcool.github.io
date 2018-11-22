function snakeSketch(sketch) {

	// var grid;
	var w, h;

	// function getI(x,y) {
	// 	return y * w + x;
	// }

	const UP = 38;
	const DOWN = 40;
	const LEFT = 37;
	const RIGHT = 39;


	var arrows = [UP, DOWN, LEFT, RIGHT];
	var directions = {
		38: [0, -1], // up
		40: [0, 1], // down
		37: [-1, 0], // left
		39: [1, 0] // right
	};
	var snake;

	var lastkey;

	var wait = 0;
	var waitTime = 5;
	var apple = [5, 5];
	var lost = false;

	sketch.setup = () => {
		sketch.createCanvas(500, 500);
		w = 30;
		h = w;
		// grid = Array(w*h).fill(false);

		lastkey = DOWN;
		snake = [
			[0, 0]
		];

		sketch.frameRate(30);
	}

	function snakeinc(arr) {
		var result = false
		snake.forEach(v => {
			if (v[0] === arr[0] && v[1] === arr[1]) {
				result = true
			}
		})
		return result
	}

	function oot(next) {
		return (next[0] < 0 || next[0] > w - 1 || next[1] < 0 || next[1] > h - 1)
	}


	sketch.draw = () => {
		sketch.background('#212121');
		sketch.noStroke();
		// size of each "tile".....
		var s = sketch.width / w;
		// DRAW THE APPLE ...
		sketch.fill(255, 0, 0);
		sketch.rect(apple[0] * s, apple[1] * s, s, s);

		// DRAWING SNAKE NOW .
		sketch.fill(0, 150, 0);
		for (var i of snake) {
			sketch.rect(i[0] * s, i[1] * s, s, s);
		}
		// DONE NOW UPDATE THE GODAMN snake
		if (wait == waitTime) {
			var h = snake[snake.length - 1];
			var d = directions[lastkey];
			var next = [h[0] + d[0], h[1] + d[1]];
			if (snakeinc(next) || oot(next)) {
				sketch.noLoop();
				sketch.background(150, 0, 0);
				sketch.createP("EPIC LOSE.");
				lost = true;
			}
			snake.push(next);
			if (next[0] == apple[0] && next[1] == apple[1]) {
				var ax = Math.floor(sketch.random(w));
				var ay = Math.floor(sketch.random(h));
				apple = [ax, ay];
				while (snakeinc(apple)) {
					ax = Math.floor(sketch.random(w));
					ay = Math.floor(sketch.random(h));
					apple = [ax, ay];
				}
			} else {
				snake.shift();
			}

			wait = 0
		}
		wait++;

	}

	sketch.mousePressed = () => {
		if (lost) {
			sketch.loop();
			sketch.canvas.nextSibling.remove();
			wait = 0;
			waitTime = 5;
			apple = [5, 5];
			lastkey = DOWN;
			snake = [
				[0, 0]
			];
			lost = false;
		}
	}

	sketch.keyPressed = () => {
		if (arrows.indexOf(sketch.keyCode) != -1) {
			lastkey = sketch.keyCode;
		}
	}
}

myp5 = new p5(snakeSketch, 'card-canvas');