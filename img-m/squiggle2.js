let img;
let cnv;

function preload() {
  img = loadImage('assets/5.png');
}

function setup() {
  cnv = createCanvas(img.width, img.height);
  rectMode(CENTER);
  let newCanvasX = (windowWidth - img.width) / 2;
  let newCanvasY = (windowHeight - img.height) / 2;
  cnv.position(newCanvasX, newCanvasY);

  //get pixel info
  for (var col = 0; col < img.width; col += 5) {
    for (var row = 0; row < img.height; row += 5) {
      let xPos = col;
      let yPos = row;
      let c = img.get(xPos, yPos);
      push();

      translate(xPos, yPos);
      rotate(radians(random(360)));
      noFill();
      strokeWeight(random(5));
      point(xPos, yPos);
      strokeWeight(random(3));
      // stroke(color(c));
      stroke(color(random(120), random(190), random(190)));

      curve(
        xPos,
        yPos,
        cos(yPos) + sin(xPos) * 10,
        0,
        0,
        -cos(yPos) * 10,
        sin(xPos) * cos(yPos) * 20,
        cos(yPos) * sin(xPos) * 30
      );
      pop();
    }
  }
}

function keyPressed() {
  if (key === 's') {
    saveCanvas('test.jpg');
  }
}

function draw() {}
