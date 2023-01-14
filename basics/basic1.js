// init seed value and range
let y = 100;
let num = 2000;
let a = 40;

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
function slideLeft() {
  a = a - 35;

  if (a < 0) {
    a = width;
  }

  return { a, randomHeight, a, randomYPosition };
}

let getRandomYPosition = () => {
  return Math.floor(Math.random(num) * 100);
};
let getRandomHeight = () => {
  return Math.floor(Math.random(110) * 100);
};

console.log(getRandomYPosition());

function setup() {
  createCanvas(1000, 800);
  frameRate(60);
}

function draw() {
  background(0);
  bubble.move();
  bubble.display();
  // a = a - 20;

  // if (a < 0) {
  //   a = width;
  // }
}

// for (let i; i < num; i++) {
//   const { a, randomHeight, randomYPosition } = slideLeft();
//   rect(a, randomHeight, a, randomYPosition);
// }
// const { a, randomHeight, randomYPosition } = slideLeft();
