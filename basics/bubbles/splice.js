const bubbles = [];

function Bubble(x, y) {
  (this.x = x), (this.y = y), (this.lifespan = 255);
  (this.move = function () {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }),
    (this.update = function () {
      noStroke();
      fill(this.lifespan, 100);
      ellipse(this.x, this.y, 18, 18);
      this.lifespan--;
    });
  this.isFinished = function () {
    if (this.lifespan <= 0) {
      return true;
    } else {
      return false;
    }
  };
}

function mousePressed() {
  bubbles.push(new Bubble(mouseX, mouseY));
}

function setup() {
  createCanvas(720, 450);
}

function draw() {
  background(0);
  for (var i = bubbles.length - 1; i >= 0; i--) {
    bubbles[i].move();
    bubbles[i].update();
    if (bubbles[i].isFinished()) {
      bubbles[i].splice(i, 1);
    }
  }
}
