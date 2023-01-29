function setup() {
  createCanvas(800, 800);
  colorMode(HSB, 360, 100, 100, 100);
  noStroke();
}

function draw() {
  background(230, 30, 23);
  ellipseMode(CENTER);
  linearGradient(
    width / 2,
    200,
    width / 2,
    height,
    color(60, 50, 100, 100),
    color(290, 100, 40, 100)
  );
  ellipse(width / 2, height / 2, 400, 400);
  radialGradient(
    width - 100,
    100,
    0,
    width - 100,
    100,
    550,
    color(190, 100, 100, 100),
    color(0, 0, 0, 0)
  );
  ellipse(width / 2, height / 2, 400, 400);
}

function linearGradient(sX, sY, eX, eY, colorS, colorE) {
  let gradient = drawingContext.createLinearGradient(sX, sY, eX, eY);
  gradient.addColorStop(0, colorS);
  gradient.addColorStop(1, colorE);
  drawingContext.fillStyle = gradient;
}

function radialGradient(sX, sY, sR, eX, eY, eR, colorS, colorE) {
  let gradient = drawingContext.createRadialGradient(sX, sY, sR, eX, eY, eR);
  gradient.addColorStop(0, colorS);
  gradient.addColorStop(1, colorE);
  drawingContext.fillStyle = gradient;
}

function keyPressed() {
  if (key === 's') {
    saveCanvas('test.jpg');
  }
}
