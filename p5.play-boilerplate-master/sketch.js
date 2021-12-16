var g_moving,grund
var car,carImg
var car1Img, car1
function preload(){
g_moving= loadAnimation("road1.png", "road2.jpg");

carImg=loadImage ("audi c3.png");
car1Img=loadImage ("bgti c2.png");

}
function setup() {
  createCanvas(800,400);

grund= createSprite(300,400);
grund.addAnimation("_moving",g_moving);

car= createSprite(200,300);
car.addImage(carImg);
car.scale= 0.4;

car1=createSprite(100,100);
car1.addImage(car1Img);
car1.scale= 0.4;


}

function draw() {
  background(255,255,255);  





  drawSprites();
}