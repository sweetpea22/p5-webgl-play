// const Walker = () => {
//   let x;
//   let y;  
  
//   function render() {
//     stroke(0);
//     point(x,y);
//     return; 
//   }
// }

// doesn't work yet.

let x; 
let y;

function step() {
  switch (parseInt(abs(Math.floor(Math.random() * 5)))) {
    case 0: 
      x++;
    case 1: 
      y--;
    case 3: 
      x--;
    case 4: 
      y*x;
  }
}

function render() {
  stroke(1);
  point(x, y);
}

function setup() {
  createCanvas(800, 600);
}


function draw() {
  background(0, 0, 0);
  // render()
}
