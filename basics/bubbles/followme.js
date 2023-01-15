let bubbles = [];

function Bubble(x, y) {
  (this.x = x),
    (this.y = y),
    (this.move = function () {
      this.x = this.x + random(-1, 1);
      this.y = this.y + random(-1, 1);
    }),
    (this.display = function () {
      stroke(200);
      strokeWeight(1);
      fill(173, 79, 229);
      ellipse(this.x, this.y, 18, 18);
    });
}

function setup() {
  createCanvas(720, 450);
  // for (var i = 0; i < 1; i++) {
  // bubbles[i] = new Bubble();
  // }
}

function mouseDragged() {
  bubbles.push(new Bubble(mouseX, mouseY));
  if (bubbles.length > 10) {
    bubbles.splice(0, 1);
  }
}

function draw() {
  background(0);
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].display();
  }
}
