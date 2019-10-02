function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(25);
  






  strokeWeight(2);
  fill(210,25,0);
  arc(620, 385, 600, 600, 0, 0);















  
  translate(620, 385);
  rotate(-90);

  let hr = hour();
  let mn = minute();
  let sc = second();

  

  strokeWeight(8);
  stroke(0, 350, 0);
  fill(2);
  let secondAngle = map(sc, 0, 60, 0, 360);
  arc(0, 0, 600, 600, 0, secondAngle);

  stroke(150, 100, 255);
  fill(0,225,0);
  let minuteAngle = map(mn, 0, 60, 0, 360);
  arc(0, 0, 400, 400, 0, minuteAngle);

  stroke(150, 255, 100);
  fill(0,22,300);
  let hourAngle = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 200, 200, 0, hourAngle);

  push();
  rotate(secondAngle);
  stroke(255, 100, 150);
  line(0, 0, 100, 0, secondAngle);
  pop();

  push();
  rotate(minuteAngle);
  stroke(150, 100, 255);
  line(0, 0, 75, 0);
  pop();

  push();
  rotate(hourAngle);
  stroke(150, 255, 100);
  line(0, 0, 50, 0);
  pop();

  stroke(255);
  point(0, 0);



}


















 function windowResized(){
	resizeCanvas(windowWidth,windowHeight);
  
 }