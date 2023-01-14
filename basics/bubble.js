const bubble = {
  x: 100,
  y: 200,
  move: function () {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  },
  display: function () {
    stroke(255);
    strokeWeight(5);
    noFill();
    ellipse(this.x, this.y, 24, 24);
  },
};

function setup() {
  createCanvas(1000, 800);
  frameRate(60);
}

function draw() {
  background(0);
  bubble.move();
  bubble.display();
}
