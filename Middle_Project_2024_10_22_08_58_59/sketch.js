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
  fill('#f0c5b4');
  strokeWeight(0);
  triangle(572, 344, 617, 335, 568, 316);
  
  fill('#d8b9b6');
  strokeWeight(0);
  triangle(547, 255, 609, 274, 568, 316);
  
  fill('#eac0b0');
  strokeWeight(0);
  triangle(609, 274, 617, 335, 568, 316);
    
  fill('#e7b497');
  strokeWeight(0);
  triangle(618, 334, 609, 274, 674, 310);
  
  fill('#cf9d7a');
  strokeWeight(0);
  triangle(645, 360, 707, 334, 674, 310);
  
  //hairband
  fill('#2a2231');
  strokeWeight(0);
  triangle(752, 378, 708, 335, 786, 327);
  
  fill('#4b4164');
  strokeWeight(0);
  triangle(848, 320, 818, 266, 786, 327);
  
  fill('#38324a');
  strokeWeight(0);
  triangle(708, 335, 697, 271, 786, 327);
  
  fill('#6968ac');
  strokeWeight(0);
  triangle(754, 270, 697, 271, 786, 327);
  
  fill('#352c3f');
  strokeWeight(0);
  triangle(754, 270, 818, 266, 786, 327);
  
  fill('#6664a5');
  strokeWeight(0);
  triangle(754, 270, 818, 266, 757, 230);
  
  fill('#5C70B1');
  strokeWeight(0);
  triangle(825, 214, 818, 266, 757, 230);
  
  fill('#6866a5');
  strokeWeight(0);
  quad(708, 334, 674, 311, 653, 229, 697, 271);
  
  fill('#58588b');
  strokeWeight(0);
  triangle(653, 229, 697, 271, 754, 270);
  
  fill('#7d7dbb');
  strokeWeight(0);
  triangle(653, 229, 757, 230, 754, 270);
  
  