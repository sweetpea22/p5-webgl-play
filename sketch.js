function setup() {
  createCanvas(640, 480);
  // stroke(255, 0, 155);
  frameRate(60);
}

let a = 120;
let x = 0;

function draw() {
  background(0);
  function slideLeft() {
    a = a - 25;
    if (a < 0) {
      a = width
    }
    rect(a, 90, a, 17);
    rect(a, 120, a, 20);
  }
  function slideRight() {
    x = x + 19;
    if (x > width) {
      x = x - width;
    }
    rect(x, 30, 120, 20);
    rect(x, 60, 80, 18);
  }
  
  slideLeft();
  slideRight();

}
