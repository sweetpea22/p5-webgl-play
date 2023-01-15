let bubbles = [];

function setup() {
  createCanvas(600, 400);
  for (var i = 0; i < 50; i++) {
    bubbles[i] = new Bubble();
  }
}

function draw() {
  background(0);
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].display();
  }
}


