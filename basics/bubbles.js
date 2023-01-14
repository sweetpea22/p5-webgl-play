let bubbles = [];
let easing = 0.05;

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

function Bubble() {
  (this.x = random(0, width)),
    (this.y = random(0, height)),
    (this.move = function () {
      this.x = this.x + random(-25, 25);
      this.y = this.y + random(-25, 25);
    }),
    (this.display = function () {
      stroke(255);
      strokeWeight(1);
      noFill();
      ellipse(this.x, this.y, 18, 18);
    });
}
