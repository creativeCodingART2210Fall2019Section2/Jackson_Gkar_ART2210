//Stable set up
//"CircleX=0" Always place your object set up to SquareX=0 or whatever to equal 0
function setup() {
  createCanvas(1175, 650);
  strokeWeight(20);
  circleX=1;
 
}
   //Draw Things
   function draw() {
   background(0,150,200);
 
   if (mouseX > 100) {
     fill(0,0,500)
       
     //fill(200,200,0)
     ellipse(275, 230, 200, 400);{
      circleX=circleX + 0.10;
     
   }
     fill(141, 85, 36)
     rect(225,80, 100, 300);

   stroke(5);
     fill(0,0,200)
   line(150,0,150, height);
 
   line(400,0,400, height);
  
   line(400,0,150, height);
 
   line(270,100,20, height);
 
     fill(5,200,0)
     
     rect(50, 1500, 25, 75);

     rect(50, 100, 100, 75);
     
     rect(50, 250, 100, 75);
     
//Topright-left/topleftp/width/rotation/topright/length
     triangle(250, 80, 330, 80, 325, 230);
      triangle(250, 380, 330, 380, 325, 240);
   }
  }