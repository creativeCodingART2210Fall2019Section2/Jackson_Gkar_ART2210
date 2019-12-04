let snake;
let rez = 45;
let food;
let w;
let h;

function setup() {
  createCanvas(windowWidth,windowHeight);
  w = floor(width / rez);
  h = floor(height / rez);
  frameRate(5);
  snake = new Snake();
  foodLocation();
}

function foodLocation() {
  let x = floor(random(w));
  let y = floor(random(h));
  food = createVector(x, y);
  
}

function keyPressed() {
  if(keyCode === LEFT_ARROW) {
    snake.setDir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
  	snake.setDir(1, 0);
  } else if (keyCode === DOWN_ARROW) {
  	snake.setDir(0, 1);
  } else if (keyCode === UP_ARROW) {
  	snake.setDir(0, -1);
  } else if (key == ' ') {
  	snake.grow();
  }

}

function draw() {
  scale(rez);
  background(210,150,0);
  if (snake.eat(food)) {
     foodLocation();  

  }
  snake.update();
  snake.show();
  
  
  if (snake.endGame()) {
    print('END GAME');
    text ('game')
    background(75, 100, 300);
    noLoop();
  }
  
  noStroke();
  fill(20, 200, 13);
  rect(food.x, food.y, 1, 1);


}

function windowResized(){
	resizeCanvas(windowWidth,windowHeight);
  
 }