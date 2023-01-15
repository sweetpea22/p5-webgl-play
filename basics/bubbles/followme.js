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
}

function mousePressed() {
  bubbles.push(new Bubble(mouseX, mouseY));
  if (bubbles.length > 10) {
    bubbles.splice(0, 1);
  }
  removeOffscreen(bubbles);
  // removeOffscreen(bubbles[bubbles.length]);
}

function draw() {
  background(0);
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].display();
  }
}

//challenge, remove bubble from array if it touches the edges of the screen

function removeOffscreen(arr) {
  let currentBubble = arr[arr.length - 1];

  console.log(arr);
  console.log(currentBubble);
  // console.log(arr[currentBubbleIndex]);
  if (
    currentBubble.x >= width - 5 ||
    currentBubble.y >=
    (height - 5 || currentBubble.x <= 4 || currentBubble.y <= 4)
  ) {
    arr.splice(arr[arr.length - 1], 1);
  }
}

// store val when bubble touches maxweight/maxheight and 0 0. 

// compare bubble at bubbles[i], record currentBubble. 
// if touching, bubbles.splice(bubbles[i], 1);
// console.log(bubbles)
