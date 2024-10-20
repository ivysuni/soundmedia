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
  
  //skin
  fill('#cf9d7a');
  strokeWeight(0);
  triangle(645, 360, 707, 334, 674, 310);
  
  fill('#f0c5b4');
  strokeWeight(0);
  triangle(572, 344, 617, 335, 568, 316);
  
  fill('#eac0b0');
  strokeWeight(0);
  triangle(609, 274, 617, 335, 568, 316);
  
  fill('#d8b9b6');
  strokeWeight(0);
  triangle(547, 255, 609, 274, 568, 316);
  
  fill('#e7b497');
  strokeWeight(0);
  triangle(618, 334, 609, 274, 674, 310);
}