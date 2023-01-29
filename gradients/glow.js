function setup() {
  createCanvas(800, 800);
  colorMode(HSB, 360, 100, 100, 100);
  rectMode(CENTER);
}

function draw() {
  background(230, 30, 23);

  drawingContext.shadowBlur = 32;
  drawingContext.shadowColor = color(207, 7, 99);
  rect(width / 2, height / 2, 400, 400, 32);
}
