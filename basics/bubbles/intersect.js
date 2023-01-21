const bubbles = [];
var bubble1;
var bubble2;

function Bubble(x, y) {
  this.x = x;
  this.y = y;
  // this.lifespan = 255;
  this.r = 24;

  this.move = function () {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  };

  this.update = function () {
    noStroke();
    fill(255, 100, 255);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
    // this.lifespan--;
  };

  this.isFinished = function () {
    if (this.lifespan < 0) {
      return true;
    } else {
      return false;
    }
  };

  this.intersects = function (other) {
    var d = dist(this.x, this.y, other.x, other.y);
    if (d < this.r + other.r) {
      return true;
    } else {
      return false;
    }
  };

  this.grow = function () {
    this.r = this.r / 1.01;
  };
}

function mousePressed() {
  bubbles.push(new Bubble(mouseX, mouseY));
  console.log(bubbles);
}

function setup() {
  createCanvas(720, 450);
  bubble1 = new Bubble(400, 200);
  bubble2 = new Bubble(380, 200);
}

function draw() {
  background(0);

  bubble1.update();
  bubble1.move();

  bubble2.update();
  bubble2.move();

  if (bubble1.intersects(bubble2)) {
    bubble1.grow();
    bubble2.grow();
  }
}
