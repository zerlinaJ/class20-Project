var car, carImage, wall;
var speed,weight;

function preload(){
  carImage = loadImage("car.png");
redCarImage = loadImage("redCar.png")
yellowCarImage = loadImage("yellowCar.png")
greenCarImage = loadImage("greenCar.png")
}

function setup() {
  createCanvas(1600,400);

  speed = random(55,90);
  weight = random(400,1500)
  car = createSprite(50, 200, 50, 50);
  car.scale = 0.5;
  car.velocityX = speed;
  car.addImage(carImage);
  wall = createSprite(1500,200,60,height/2);

}

function draw() {
  background(255,255,255);  

  if(wall.x-car.x < (wall.width + car.width)/2){
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22509;

    if(deformation > 100){
     // car.shapeColor=color(255,0,0);
     car.addImage(redCarImage);
    }
    if(deformation < 180 && deformation > 100){
     // car.shapeColor=color(230,230,0);
     car.addImage(yellowCarImage);
    }
    if(deformation < 100){
     // car.shapeColor=color(0,255,0);
     car.addImage(greenCarImage);
    }
  }

  drawSprites();
}