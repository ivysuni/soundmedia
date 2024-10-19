let img;

function preload(){
  img = loadImage("pearl.jpg");
}

function setup() {
  createCanvas(1280, 720);
}

function draw() {
  background(255);
  image(img, 0, 0);
  
  
  if(mouseIsPressed === true){
    console.log(mouseX, mouseY);
  }
  fill('#cf9d7a');
  strokeWeight(0);
  triangle(645, 360, 707, 334, 674, 310);
  
}