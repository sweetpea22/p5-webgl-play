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
    250,
    220,
    0,
    250,
    250,
    250,
    color(150, 100, 100, 100),
    color(130, 100, 40, 0)
  );
  ellipse(width / 2, height / 2, 400, 400);
}

export function linearGradient(sX, sY, eX, eY, colorS, colorE) {
  let gradient = drawingContext.createLinearGradient(sX, sY, eX, eY);
  gradient.addColorStop(0, colorS);
  gradient.addColorStop(1, colorE);
  drawingContext.fillStyle = gradient;
}

export function radialGradient(sX, sY, sR, eX, eY, eR, colorS, colorE) {
  let gradient = drawingContext.createRadialGradient(sX, sY, sR, eX, eY, eR);
  gradient.addColorStop(0, colorS);
  gradient.addColorStop(1, colorE);
  drawingContext.fillStyle = gradient;
}

export function keyPressed() {
  if (key === 's') {
    saveCanvas('test.jpg');
  }
}
