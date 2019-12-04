var weather;
var api = "http://api.openweathermap.org/data/2.5/weather?q=";
//var city = "London";
var apiKey = "&APPID=f1eb3e3afec077ffe7ed5a909b9b5b75";
var units = "&units=metric";
var input;
 
function preload(){
  //weather = loadJSON("http://api.openweathermap.org/data/2.5/weather?q=London&APPID=f1eb3e3afec077ffe7ed5a909b9b5b75&units=metric");
}
 
function setup(){
  createCanvas(400,400);  

var button = select("#submit");
button .mousePressed(weatherAsk);
  //weatherAsk();


input = select("#city");


}
 
function weatherAsk(){
var url = api + input.value() + apiKey + units;
loadJSON(url, gotData);
}
 

function gotData(data){

  weather = data;
}
 
function draw(){
  background(0);
  if(weather){
    textAlign(CENTER);
    fill(255);
    text(weather.name,width/2, 50);
    text("Humidity  " + weather.main.humidity,width/2, 300);
    text("Temperature  " + weather.main.temp + " C",width/2, 350);
    ellipse(width/2,height/2,weather.main.humidity,weather.main.humidity);
  }
 
}