function setup() {
  createCanvas(800, 800);
  colorMode(HSB, 360, 100, 100, 100);
  rectMode(CENTER);
  noStroke();
}

function draw() {
  background(230, 30, 23);
  linearGradient(
    width / 2 - 200,
    height / 2 - 200,
    width / 2 + 200,
    height / 2 + 200,
    color(310, 100, 100, 100),
    color(200, 100, 100, 100)
  );
  rect(width / 2, height / 2, 400, 400, 32);
}

function linearGradient(sX, sY, eX, eY, colorS, colorE) {
  let gradient = drawingContext.createLinearGradient(sX, sY, eX, eY);
  gradient.addColorStop(0, colorS);
  gradient.addColorStop(1, colorE);
  drawingContext.fillStyle = gradient;
}
