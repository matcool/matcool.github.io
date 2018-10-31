function bluenoiseSketch(ctx) {

    let r = 20;
    let rSlider;
    let k = 30;
    let active;
    let samples = [];
    let len;
    let done;

    ctx.setup = function() {
        ctx.createCanvas(500, 500);
        rSlider = ctx.createSlider(8,25,r);
        let genBtn = ctx.createElement('a','Generate');
        genBtn.mousePressed(start)
        genBtn.class('waves-effect waves-light btn');
        start(250,250);
    }

    function makeVector(x,y) {
        return {'x' : x, 'y' : y}
    }

    function start() {
        r = rSlider.value();
        active = [];
        samples = [];
        active.push(makeVector(ctx.random(100,ctx.width-100), ctx.random(100,ctx.height-100)));
        len = active.length;
        done = false;
    }

    function step() {
        if (len > 0) {
            let i = ctx.int(ctx.random(active.length - 1));
            let cur = active[i];
            let found = false;
            parentloop:
                for (let n = 1; n <= k; n++) {
                    let rad = ctx.random(r, 2 * r);
                    let ang = (n / k) * ctx.TWO_PI;
                    let pos = makeVector(ctx.cos(ang) * rad + cur.x, ctx.sin(ang) * rad + cur.y);
                    for (let sample of samples) {
                        let d = ctx.dist(pos.x, pos.y, sample.x, sample.y);
                        if (d <= r) {
                            continue parentloop;
                        }
                    }
                    if (inbounds(pos)) {
                        found = true;
                        active.push(pos);
                        samples.push(pos);
                        len++;
                    }
                }
            if (!found) {
                active.splice(i,1);
            }
            len = active.length;
        } else {
            done = true;
        }
    }

    function inbounds(vec) {
        return (vec.x > 0 && vec.x < ctx.width && vec.y > 0 && vec.y < ctx.height)
    }


    ctx.draw = function() {
        ctx.background(255);
        step();
        for (let sample of samples) {
            ctx.ellipse(sample.x, sample.y, 5, 5);
        }
    }

}

myp5 = new p5(bluenoiseSketch, 'card-canvas');