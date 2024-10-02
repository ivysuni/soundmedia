function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);
  ellipse(200, 200, 200, 200); 
  arc(200, 210, 100, 100, 2*PI, 3*PI);
  ellipse(160, 160, 20, 20); 
  point(160, 160);
  ellipse(240, 160, 20, 20); 
  point(240, 160);
  line(190, 190, 210, 190);
  rect(400, 300, 300, 200);
  arc(550, 460, 200, 100, PI, 0);
  line(450, 350, 520, 370);
  line(650, 350, 580, 370);
  stroke(0); // 밝기
  line(100, 100, 100, 0);
}