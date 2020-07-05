var car,wall;
var speed,weight;
speed = random(55,90)
weight = random(400,1500)
deformation = ((speed * weight * speed/2)/22500);


function setup() {
  createCanvas(1600,400);
  car = createSprite(100,100,30,10);
  wall = createSprite()
}

function draw() {
  background(255,255,255);

  car.velocityX = speed;



  drawSprites();
}