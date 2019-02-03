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

	let ax, ay;


	sketch.setup = () => {
		sketch.createCanvas(500, 500);
		resetG();
		sx = sketch.width / gw;
		sy = sketch.height / gh;

		toolBtn('brush', 'brush');
		toolBtn('clear', 'eraser');
		toolBtn('timeline', 'line');
		toolBtn('panorama_fish_eye', 'circle');
		toolBtn('fiber_manual_record', 'circleF');

		sketch.createElement('br');
		sketch.createElement('br');

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

	function toolBtn(icon, tool_) {
		let btn = sketch.createElement('a', `<i class="material-icons">${icon}</i>`);
		btn.mouseClicked(_ => tool = tool_);
		btn.class('waves-effect waves-light btn');
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
		let pgmx = Math.floor(sketch.pmouseX / sx);
		let pgmy = Math.floor(sketch.pmouseY / sy);
		if (sketch.mouseIsPressed) {
			switch (tool) {
				case 'brush':
					gridLine(pgmx, pgmy, gmx, gmy);
					break;
				case 'eraser':
					paint(gmx, gmy, true);
					break;
				case 'line':
					sketch.stroke(255);
					sketch.strokeWeight(bSize == 0 ? sx : (bSize * 2 + 1) * sx);
					if (ax == undefined) {
						ax = gmx;
						ay = gmy;
					}
					sketch.line(ax * sx + sx / 2, ay * sy + sy / 2, gmx * sx + sx / 2, gmy * sy + sy / 2);
					break;
				case 'circle':
				case 'circleF':
					if (ax == undefined) {
						ax = gmx;
						ay = gmy;
					}
			}
		}
	}

	sketch.mouseReleased = () => {
		let gmx = Math.floor(sketch.mouseX / sx);
		let gmy = Math.floor(sketch.mouseY / sy);
		if (ax != undefined) {
			switch (tool) {
				case 'line':
					gridLine(ax, ay, gmx, gmy);
					break;
				case 'circle':
				case 'circleF':
					gridCircle(ax, ay, Math.floor(sketch.dist(ax, ay, gmx, gmy)), tool == 'circleF');
					break;
			}
		}
		ax = ay = undefined;
	}

	function putPix(x, y, t = 1) {
		if (y >= 0 && y < gh && x >= 0 && x < gw) grid[y][x] = t;
	}

	function paint(x, y, erase = false) {
		let t = erase ? 0 : 1
		if (bSize == 0) {
			grid[y][x] = t;
		} else {
			for (let j = -bSize; j <= bSize; j++) {
				for (let i = -bSize; i <= bSize; i++) {
					putPix(x + i, y + j, t);
				}
			}
		}
	}

	// literally just copy pasted this https://stackoverflow.com/a/4672319
	// because i couldn't understand the one on wikipedia :grin:
	function gridLine(x0, y0, x1, y1, erase = false) {
		var dx = Math.abs(x1 - x0);
		var dy = Math.abs(y1 - y0);
		var sx = (x0 < x1) ? 1 : -1;
		var sy = (y0 < y1) ? 1 : -1;
		var err = dx - dy;

		while (true) {
			paint(x0, y0, erase);

			if ((x0 == x1) && (y0 == y1)) break;
			var e2 = 2 * err;
			if (e2 > -dy) {
				err -= dy;
				x0 += sx;
			}
			if (e2 < dx) {
				err += dx;
				y0 += sy;
			}
		}
	}

	// both from https://web.archive.org/web/20120422045142/https://banu.com/blog/7/drawing-circles/
	function gridCircle(cx, cy, r, fill = false) {
		if (fill) {
			for (let y = -r; y <= r; y++) {
				for (let x = -r; x <= r; x++) {
					if (x ** 2 + y ** 2 <= r ** 2) {
						putPix(x + cx, y + cy)
					}
				}
			}
			return;
		}

		let l = Math.floor(r * Math.cos(sketch.QUARTER_PI));

		for (let x = 0; x <= l; x++) {
			let y = Math.floor(Math.sqrt(r ** 2 - x ** 2));

			putPix(x + cx, y + cy);
			putPix(x + cx, -y + cy);
			putPix(-x + cx, y + cy);
			putPix(-x + cx, -y + cy);

			putPix(y + cx, x + cy);
			putPix(y + cx, -x + cy);
			putPix(-y + cx, x + cy);
			putPix(-y + cx, -x + cy);
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
		/* braille characters are u+(0x2800+0bjhgdbfca)
		ab
		cd
		fg
		hj
		*/
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