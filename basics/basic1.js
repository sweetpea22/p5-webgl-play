// init seed value and range
let a = 40;

function setup() {
  createCanvas(1000, 800);
  fill(255, 139, 19);
  noStroke();

  frameRate(60);
}

function draw() {
  background(0);
  a = a - 20;

  if (a < 0) {
    a = width;
  }
  rect(a, 20, a / 5, 20);
  rect(a, 60, a / 5, 30);
}

// wonky...
// function slideLeft() {
//   a = a - 35;

//   if (a < 0) {
//     a = width;
//   }

//   return { a, randomHeight, a, randomYPosition };
// }

// let getRandomYPosition = () => {
//   return Math.floor(Math.random(num) * 100);
// };
// let getRandomHeight = () => {
//   return Math.floor(Math.random(110) * 100);
// };
