function setup() {
 
  createCanvas(1740,930);
  background(75,20,180);
  fill(50);

}

function draw() {

  ellipse(mouseX,mouseY,50,20);
  var circleX;

  function setup() {
    noStroke();
  }
  
  function draw() {
    background(204);
    let x1 = map(mouseX, 0, width, 100, 150);
    ellipse(x1, 25, 25, 25);
    let x2 = map(mouseX, 0, width, 0, 100, true);
    ellipse(x2, 75, 25, 25);
  }

 


  function windowResized(){

    resizeCanvas(windowWidth,windowHeight);
    background(180,10,45);
    fill(500);
  
  }
}
