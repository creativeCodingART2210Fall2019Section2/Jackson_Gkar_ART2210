var x = 190;
var y = 90;
var w = 190;
var h = 150;

var x = 380;
var y = 180;
var w = 380;
var h = 300;
function setup() {
createCanvas(1780, 800);
}

function draw() {
  background(50);
  if ((mouseX > x) && (mouseX < x+w) &&
  (mouseY > y) && (mouseY < y+h)) {
  fill(30);
  }
  else {
  fill(200);
  }
  rect(x, y, w, h);
line(mouseX, mouseY, w, h);
if (keyIsPressed) {
line(220, 20, 20, 100);
}
}