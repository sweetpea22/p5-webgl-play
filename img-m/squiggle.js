let img;
let cnv;

function preload() {
  img = loadImage('assets/4.png');
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
      noFill();
      strokeWeight(random(5));
      stroke(color(c));

      curve(
        xPos,
        yPos,
        cos(yPos) + sin(xPos) * 40,
        0,
        0,
        -cos(yPos) * 50,
        sin(xPos) * cos(yPos) * 50,
        -cos(yPos) * 30
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
