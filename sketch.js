
var monkey , monkey_running, ground
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,250);
  ground = createSprite(300,219,1200,20);
  obstacleGroup = new Group();
  bananaGroup = new Group();
  monkey = createSprite(60,180,200,200);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
}


function draw() {
  background("white");
  ground.velocityX = - 4;
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  food();
  stone();
  monkey.collide(ground);
  monkey.setCollider("rectangle",10,10,600,550);
  monkey.velocityY=6;
  if(keyDown("space")){monkey.velocityY = -22}
  text("Survival Time:"+ score,450,10);
  score = score + Math.round(frameCount/1);
  drawSprites();
}
  function food (){
    if(World.frameCount%40===0){banana = createSprite(580,200,120,20); banana.addImage(bananaImage); banana.scale = 0.1; banana.y=Math.round(random(120,200));banana.lifetime=100; banana.velocityX = -7; bananaGroup.add(banana);}
  }
function stone(){
  if(World.frameCount%300===0){obstacle = createSprite(580,195,10,40); obstacle.addImage(obstacleImage); obstacle.velocityX = -10; obstacle.scale = 0.15; obstacle.lifetime = 300; obstacleGroup.add(obstacle);}
}