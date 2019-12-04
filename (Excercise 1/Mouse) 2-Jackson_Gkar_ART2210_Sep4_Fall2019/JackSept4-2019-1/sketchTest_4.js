function setup() {
 
  createCanvas(1740,930);
background (50,300,25);
  
}

function mousePressed() {
  //let value = 0;
  fill(100);
  line(mouseX, mouseY, mouseX+220, mouseY+100);
  
}

  var str = '20';
var diameter = float(str);
ellipse(width / 4, height / 4, diameter, diameter);
  var circleX=circleX;



  function windowResized(){

    resizeCanvas(windowWidth,windowHeight);
  
  }
