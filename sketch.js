var car1, car2, car3, wall, speedForCar1, speedForCar2, speedForCar3, wieght, deformationForCar1,
deformationForCar2, deformationForCar3, defomLessThan100, defomBet100180, defomMoreThan180;

function setup() {
  createCanvas(1600,400);

  speedForCar1 = random(30,60);
  speedForCar3 = random(40,180);
  speedForCar2 = random(40,110);

  defomLessThan100 = color(0, 255, 0);
  defomMoreThan180 = color(255,0,0);
  defomBet100180 = color(230,230,0);

  wieght = random(400,1500);

  car1 = createSprite(50,50,40,10);
  car1.shapeColor = "green";
  car1.velocityX = speedForCar1;
  car1wieght = wieght;

  car2 = createSprite(50,200,40,10);
  car2.shapeColor = "yellow";
  car2.velocityX = speedForCar2;
  car2wieght = wieght;
  
  car3 = createSprite(50,350,40,10);
  car3.shapeColor = "red";
  car3.velocityX = speedForCar3;
  car3wieght = wieght;

  wall = createSprite(1450,200,60,380);
  wall.shapeColor = "white";

  deformationForCar1 = (0.5 * car1wieght * car1.velocityX * car1.velocityX) / 22500;
  deformationForCar2 = (0.5 * car2wieght * car2.velocityX * car2.velocityX) / 22500;
  deformationForCar3 = (0.5 * car3wieght * car3.velocityX * car3.velocityX) / 22500;
}

function draw() {
  background(15);

  //wall.debug = true;

  wall.setCollider("rectangle",-1000, 0, 60,380);

  if(car1.x > 1300){
    car1.velocityX = car1.velocityX - 2;
  }

  if(car2.x > 1300){
    car2.velocityX = car2.velocityX - 2;
  }

  if(car3.x > 1300){
    car3.velocityX = car3.velocityX - 2;
  }

  if(wall.x - car1.x < (car1.width + wall.width)/2){

    car1.velocityX = 0;

    if(deformationForCar1 < 100){
      car1.shapeColor = color(defomLessThan100);
    }
    if(deformationForCar2 > 180){
      car2.shapeColor = color(defomMoreThan180);
    }
    if(deformationForCar3 > 100 && deformationForCar3 < 180){
      car3.shapeColor = color(defomBet100180);
    }

  }

  if(wall.x - car2.x < (car2.width + wall.width)/2){

    car2.velocityX = 0;

    if(deformationForCar2 < 100){
      car2.shapeColor = color(defomLessThan100);
    }
    if(deformationForCar2 > 180){
      car2.shapeColor = color(defomMoreThan180);
    }
    if(deformationForCar2 > 100 && deformationForCar2 < 180){
      car2.shapeColor = color(defomBet100180);
    }
    
  }

  if(wall.x - car3.x < (car3.width + wall.width)/2){
    car3.velocityX = 0;

    if(deformationForCar3 < 100){
      car3.shapeColor = color(defomLessThan100);
    }
    if(deformationForCar3 > 180){
      car3.shapeColor = color(defomMoreThan180);
    }
    if(deformationForCar3 > 100 && deformationForCar3 < 180){
      car3.shapeColor = color(defomBet100180);
    }
  }

  drawSprites();
}