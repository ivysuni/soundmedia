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
  triangle(570, 345, 618, 335, 568, 316);
  
  fill('#d8b9b6');
  strokeWeight(0);
  triangle(547, 255, 609, 274, 568, 316);
  
  fill('#eac0b0');
  strokeWeight(0);
  triangle(609, 274, 618, 338, 568, 316);
    
  fill('#e7b497');
  strokeWeight(0);
  triangle(618, 334, 609, 274, 674, 310);
  
  fill('#cf9d7a');
  strokeWeight(0);
  triangle(645, 360, 708, 336, 674, 310);
  
  
  
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
  quad(708, 336, 674, 311, 653, 229, 697, 271);
  
  fill('#58588b');
  strokeWeight(0);
  triangle(653, 229, 697, 271, 754, 270);
  
  fill('#7d7dbb');
  strokeWeight(0);
  triangle(653, 229, 757, 230, 754, 270);
  
  fill('#3D649C');
  strokeWeight(0);
  triangle(825, 214, 757, 230, 740, 127);
  
  fill('#929dcb');
  strokeWeight(0);
  triangle(674, 311, 609, 274, 653, 229);
  
  fill('#939cd1');
  strokeWeight(0);
  triangle(676, 164, 757, 230, 653, 229);
  
  fill('#6c7dd0');
  strokeWeight(0);
  triangle(676, 164, 757, 230, 740, 127);
  
  fill('#9fbaf1');
  strokeWeight(0);
  triangle(592, 210, 609, 274, 653, 229);
  
  fill('#9fbaf1');
  strokeWeight(0);
  triangle(591, 209, 609, 274, 653, 229);
  
  fill('#9eace3');
  strokeWeight(0);
  triangle(591, 209, 676, 164, 653, 229);
  
  fill('#9DB3E2');
  strokeWeight(0);
  triangle(591, 209, 609, 274, 546, 255);
  
  fill('#bcd1f3');
  strokeWeight(0);
  triangle(591, 209, 676, 164, 583, 149);
  
  fill('#bfd4fb');
  strokeWeight(0);
  triangle(671, 119, 676, 164, 583, 149);
  
  fill('#D3E0F5');
  strokeWeight(0);
  triangle(671, 119, 676, 164, 740, 127);
}