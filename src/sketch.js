const mySketch = new p5((sketch) => {

  let atom;

  sketch.setup = () => {
    sketch.createCanvas(CANVAS_DIMEN.WIDTH + 1, CANVAS_DIMEN.HEIGHT + 1);
    sketch.frameRate(FRAMERATE);
    sketch.textAlign(sketch.CENTER, sketch.CENTER);
    
    sketch.ellipseMode(sketch.CENTER);
    sketch.angleMode(sketch.DEGREES);

    atom = new Atom(CANVAS_DIMEN.WIDTH / 2, CANVAS_DIMEN.HEIGHT / 2, CANVAS_DIMEN.WIDTH / 10, 117);
  };

  sketch.draw = () => {
    sketch.background(COLORS.WHITE);

    atom.draw(sketch);
  };

}, SKETCH_NAME);
