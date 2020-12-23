var monkey, monkey_running
var banana, bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;
var ground;
var survivaltime=0


function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");

}



function setup() {
  createCanvas(400, 400);

  ground = createSprite(400, 350, 900, 10);
  ground.velocityX = -4;
  ground.x = ground.width / 2;

  monkey = createSprite(80, 315, 10, 10);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  
  FoodGroup=new Group();
  obstacleGroup=new Group();
}


function draw() {
  background("cyan")
  
 

  if (keyDown("space") && monkey.y > 314) {
    monkey.velocityY = -15;
  }


  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }

  monkey.velocityY = monkey.velocityY + 0.8;


  monkey.collide(ground);
  
  
  food();
  obstacle();

  drawSprites();
  
  score=0;
  
  stroke("black");
  textSize(20);
  fill("black");
  survivaltime=Math.ceil(frameCount/frameRate())
  text("survival time:"+survivaltime,100,50)

}


function food(){
  
  if(frameCount%80===0){
   var banana=createSprite(450,200,20,20);
    banana.y=Math.round(random(120,200));
    banana.addImage("imagebanana",bananaImage);
    banana.scale=0.1;
    banana.velocityX=-3;
    
    banana.lifetime=200;
    
    FoodGroup.add(banana);
    
  }
  
  
}



 function obstacle(){
   
   if(frameCount%300===0){
     var obstacle=createSprite(450,400,10,10);
     obstacle.y=315;
     obstacle.addImage("ostacleImag", obstaceImage);
     obstacle.scale=0.16;
     obstacle.velocityX=-3;
     obstacle.setCollider("rectangle",0,0,10,50);
     
     
     obstacle.lifetime=200;
     
     obstacleGroup.add(obstacle);
     
     obstacle.collide(ground);
   }
   
   
   
 }