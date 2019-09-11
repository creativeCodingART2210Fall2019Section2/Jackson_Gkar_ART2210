//Stable set up
//"CircleX=0" Always place your object set up to SquareX=0 or whatever to equal 0
function setup() {
  createCanvas(1780, 800);
  strokeWeight(50);
  circleX=0;
  }

  //Draw Things
  function draw() {
  background(120);
  ellipse (circleX, 200, 150, 140)
  
  //logic variables
  //In first line: Circle X "+2" is the Speed of the object and can be changed
 circleX=circleX + 0.5;



  }