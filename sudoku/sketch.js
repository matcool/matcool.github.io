let grid;
let w;
let selected = 0;
let orig;
let anyerrors = false;

function setup() {
    let b = windowWidth > windowHeight ? windowHeight : windowWidth;
    let c = createCanvas(b, b);
    c.parent('sudoku');
    if (b == windowWidth) {
        c.canvas.style['margin-top'] = floor((windowHeight-windowWidth)/2)+'px';
    }
    w = width - 100;
    genByShift();
    removeBlockSlots(3, 7);
    orig = JSON.parse(JSON.stringify(grid));
}

function getBlock(x, y) {
    return Array(9).fill(0).map((i, j) => grid[y * 3 + floor(j / 3)][x * 3 + (j % 3)])
}

function checkIfValid(n, x, y) {
    return grid[y].every(i => i != n) && grid.map(i => i[x]).every(i => i != n);
}

function genByShift() {
    grid = Array(9).fill().map(i => Array(9));
    let c = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    grid[0].fill(0);
    grid[0] = grid[0].map(i => i = c.splice(floor(random(0, c.length)), 1)[0]);
    let s = [1, 3, 3];
    for (let i = 1; i < grid.length; i++) {
        let shift = s[i % 3];
        grid[i] = shiftArr(grid[i - 1], shift);
    }
}

function shiftArr(a, n) {
    let c = a.slice();
    for (let i = 0; i < n; i++) {
        c.push(c.shift());
    }
    return c;
}

function removeBlockSlots(mn, mx) {
    for (let i = 0; i < 9; i++) {
        let x = i % 3;
        let y = floor(i / 3);
        let b = getBlock(x, y);
        let amt = floor(random(mn, mx + 1));
        while (b.filter(i => i == 0).length < amt) {
            let choices = b.map((i, j) => i == 0 ? 0 : [(j % 3) + x * 3, floor(j / 3) + y * 3]).filter(i => i != 0);
            let c = random(choices);
            grid[c[1]][c[0]] = 0;
            b = getBlock(x, y);
        }
    }
}

function getCount(n) {
    return grid.reduce((a, v) => a.concat(v), []).filter(i => i == n).length;
}

function getInvalid(n,x,y) {
    let row = grid[y].map((i,j) => i == n && x != j ? [j,y] : -1);
    let column = grid.map((i,j) => i[x] == n && y != j ? [x,j] : -1);
    if (row.every(i => i == -1) && column.every(i => i == -1))
        return null;
    return row.filter(i => i != -1).concat(column.filter(i => i != -1));
}

function draw() {
    background(0);
    let lang = navigator.language || navigator.userLanguage;
    fill(100,100,100,25);
    textAlign(CENTER,CENTER);
    textSize(w/15);
    noStroke();
    if (lang == 'es-ES')
        text("Hecho por Mat y José",width/2,w/2);
    else
        text("Made by Mat and joseph",width/2,w/2);
    let xoff = (width - w) / 2;
    let hovered = floor(map(mouseX - xoff, 0, w, 1, 10));
    let bsize = w / 9 - 10;
    if (mouseY < w || mouseY > height) hovered = 0;
    textAlign(CENTER, CENTER);
    for (let i = 0; i < 9; i++) {
        if (i + 1 == selected) fill(100);
        else if (i + 1 == hovered) fill(35);
        else fill(0);
        let x = map(i, 0, 9, 0, w) + xoff + (w / 9) / 2;
        stroke(255);
        ellipse(x, height - 50, w / 9 - 10);
        noStroke();
        fill(255);
        textSize(bsize / 3);
        text(i + 1, x, height - 50 - bsize / 6);
        textSize(bsize / 4);
        fill(150);
        text(9 - getCount(i + 1), x, height - 50 + bsize / 6);
    }
    if (mouseX > xoff && mouseX < width - xoff && mouseY < w && mouseY > 0 && selected != 0) {
        let gx = floor((mouseX - xoff) / w * 9);
        let gy = floor(mouseY / w * 9);
        if (orig[gy][gx] == 0 && grid[gy][gx] != selected) {
            let s = w / 9;
            textSize(s / 1.5);
            noStroke();
            let inv = getInvalid(selected,gx,gy);
            if (inv != null) {
                fill("#4f3a38");
                for (let pos of inv) {
                    ellipse(pos[0]*s+xoff+s/2,pos[1]*s+s/2,s);
                }
            } else fill(100);
            textAlign(CENTER, CENTER);
            text(selected, gx * s + s / 2 + xoff, gy * s + s / 2);
        }
    }
    for (let y = 0; y < 9; y++) {
        for (let x = 0; x < 9; x++) {
            if (grid[y][x] == 0) continue;
            let inv = getInvalid(grid[y][x],x,y);
            if (inv != null) {
                anyerrors = true;
                let s = w / 9;
                fill("#542520");
                for (let pos of inv) {
                    ellipse(pos[0]*s+xoff+s/2,pos[1]*s+s/2,s);
                }
            }
        }}

    push();
    translate((width - w) / 2, 0);
    drawGrid();
    pop();
}

function mouseClicked() {
    let xoff = (width - w) / 2;
    if (mouseY > w && mouseY < height) {
        let s = floor(map(mouseX - xoff, 0, w, 1, 10));
        if (s > 0 && s < 10) {
            if (selected == s) selected = 0;
            else selected = s;
        }
    }
    if (mouseX > xoff && mouseX < width - xoff && mouseY < w && mouseY > 0) {
        let gx = floor((mouseX - xoff) / w * 9);
        let gy = floor(mouseY / w * 9);
        if (orig[gy][gx] != 0) return
        grid[gy][gx] = grid[gy][gx] == selected ? 0 : selected;
    }
}

function drawGrid() {
    let s = w / 9;
    let gx = floor((mouseX - ((width - w) / 2)) / w * 9);
    let gy = floor(mouseY / w * 9);
    for (let y = 0; y < 9; y++) {
        for (let x = 0; x < 9; x++) {
            noStroke();
            if (orig[y][x] != 0) fill(160);
            else fill(255);
            textAlign(CENTER, CENTER);
            textSize(s / 1.5);
            let t = grid[y][x];
            if (t != 0 && !(x == gx && y == gy && grid[gy][gx] != selected && selected != 0 && orig[y][x] == 0)) {
                text(t, x * s + s / 2, y * s + s / 2);
            }
            noFill();
            stroke(100);
            rect(x * s, y * s, s - 1, s - 1);
        }
    }
    stroke(255);
    let s2 = w / 3;
    for (let y = 0; y < 3; y++) {
        for (let x = 0; x < 3; x++) {
            rect(x * s2, y * s2, s2 - 1, s2 - 1);
        }
    }
}