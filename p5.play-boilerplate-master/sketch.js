var car, wall;
var speed, weight;
function setup() {
  createCanvas(1600, 400);

  speed = random(55, 90);
  weight = random(400, 1500);

  car = createSprite(50, 200, 100, 50)
  wall = createSprite(1500, 200, 60, height/2);

  car.velocityX = speed;
}

function draw() {
  background(255,255,255);  

  text("Speed: " + round(speed) + "     " + "Weight: " + round(weight), 1300, 50)

  if(isTouchingAlgorithm(car, wall)){
    car.velocityX = 0;
    deformation = (weight*speed*speed*0.5)/22500 
    if(deformation <= 100){

      car.shapeColor = "green";

    } else if(deformation >= 180) {

      car.shapeColor = "red";

    } else {

      car.shapeColor = "yellow";

    }

  }

  drawSprites();
}

function isTouchingAlgorithm(sprite1, sprite2){
  if((Math.abs(sprite1.x - sprite2.x) - 0.5 * (sprite1.width + sprite2.width) <= 0)
  &&(Math.abs(sprite1.y - sprite2.y) - 0.5 * (sprite1.height + sprite2.height) <= 0)){

    return true;

  }
}