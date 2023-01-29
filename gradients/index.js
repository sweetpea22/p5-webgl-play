function setup() {
  createCanvas(800, 800);
  colorMode(HSB, 360, 100, 100, 100);
  rectMode(CENTER);
  noStroke();
}

function draw() {
  background(230, 30, 23);
  // linearGradient(
  //   width / 2 - 200,
  //   height / 2 - 200,
  //   width / 2 + 200,
  //   height / 2 + 200,
  //   color(310, 100, 100, 100),
  //   color(200, 100, 100, 100)
  // );
  // rect(width / 2, height / 2, 400, 400, 32);

  radialGradient(
    width / 2 - 40,
    height / 2 - 100,
    0,
    width / 2 - 40,
    height / 2 - 100,
    350,
    color(190, 100, 100, 100),
    color(310, 100, 100, 100)
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
