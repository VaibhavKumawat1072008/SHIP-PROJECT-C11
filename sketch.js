var ship,ship_running;
var sea, seaImg;

function preload(){
ship_running = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

seaImg = loadImage("sea.png")
}

function setup(){
  createCanvas(1200,600);

  sea = createSprite(60,300);
  sea.addImage("stillSea",seaImg);
  sea.scale = 0.5;

  ship = createSprite(400,390,100,100);
  ship.addAnimation("running",ship_running);
  ship.scale=0.5;

}

function draw() {
  background("white");
 drawSprites();
}