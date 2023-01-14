// init seed value and range
let y = 100;
let num = 2000;
let a = 40;
let r1, r2, r3, r4;

class MRect {
  constructor(iw, ixp, ih, iyp) {
    this.w = iw; // individual width;
    this.xpos = ixp; // rect x position;
    this.h = ih; // rect height
    this.ypos = iyp; // rect yposition
  }

  display() {
    for (let i = 0; i < num; i++) {
      rect(this.xpos, this.ypos, this.w, this.height * this.h);
    }
  }
}
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
  fill(255, 139, 19);
  noStroke();

  r1 = new MRect(20, 20, 40, 30);

  frameRate(60);
}

function draw() {
  background(0);
  a = a - 20;

  if (a < 0) {
    a = width;
  }
  r1.display();
  // rect(a, 20, a / 5, 20);
}

// for (let i; i < num; i++) {
//   const { a, randomHeight, randomYPosition } = slideLeft();
//   rect(a, randomHeight, a, randomYPosition);
// }
// const { a, randomHeight, randomYPosition } = slideLeft();
