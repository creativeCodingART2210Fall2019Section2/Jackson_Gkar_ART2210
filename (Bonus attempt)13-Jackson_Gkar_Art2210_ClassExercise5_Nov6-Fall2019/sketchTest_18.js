var weather1;
var weather2;
var api = 'http://api.openweathermap.org/data/2.5/weather?q=';
//var city = 'London';
var apiKey = "&APPID=f1eb3e3afec077ffe7ed5a909b9b5b75";
var units = '&units=metric'; //metric or imperial

var imput;

function setup(){
  createCanvas(400,400);  

 
  var button = select("#submit");
  button.mousePressed(weatherAsk);

input = select ("#city");

}

function weatherAsk() {
  var url = api + input.value() + apiKey + units; 

  loadJSON(url, gotData);
}

function gotData(data) {

  weather = data;
}
 
 
function draw(){
  background(0);
  if(weather){
    textAlign(CENTER);
    fill(255);
    text(weather.name,width/2,50);
    text(weather.main.humidity,width/2,300);
    text(weather.main,temp,width/2,350);
    ellipse(width/2-200,height/2,weather.main.humidity,weather.main.humidity);
    }

 

  textAlign(CENTER);
  fill(0);
  text(weather2.name,width/2-200,50);
  text(weather2.main.humidity,width/2-200,300);
  text(weather2.main,temp,width/2+200,350);
  ellipse(width/2-200,height/2,weather2.main.humidity,weather2.main.humidity);

}


