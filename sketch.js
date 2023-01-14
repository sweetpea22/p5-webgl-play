import { brownian } from "./basics/brownian";
let num = 2000;
let range = 40;

let ax = [];
let ay = [];


function setup() {
  createCanvas(710, 400);
  for ( let i = 0; i < num; i++ ) {
    ax[i] = width / 2;
    ay[i] = height / 2;
  }
  frameRate(15);
}

function draw() {
  background(0);
  brownian();
}