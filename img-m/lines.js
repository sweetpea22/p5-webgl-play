let img;
let cnv;

function preload() {
  img = loadImage('assets/3.png');
}

function setup() {
  cnv = createCanvas(img.width, img.height);
  rectMode(CENTER);
  let newCanvasX = (windowWidth - img.width) / 2;
  let newCanvasY = (windowHeight - img.height) / 2;
  cnv.position(newCanvasX, newCanvasY);

  //get pixel info

  for (var col = 0; col < img.width; col += 1) {
    for (var row = 0; row < img.height; row += 7) {
      let xPos = col;
      let yPos = row;
      let c = img.get(xPos, yPos);
      push();

      // translate(xPos, yPos);
      point(xPos, yPos);
      stroke(color(c));
      // pop();
    }
  }
}

function keyPressed() {
  if (key === 's') {
    saveCanvas('test.jpg');
  }
}

function draw() {}
