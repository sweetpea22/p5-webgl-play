function Bubble(x, y) {
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
