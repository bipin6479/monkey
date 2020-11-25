//creating variables
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
   //creating monkey
   monkey=createSprite(80,315,20,20);
   monkey.addAnimation("moving", monkey_running);
   monkey.scale=0.1
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x) 
  //adding bananas
  banana = createSprite(200,100,20,20)
  banana.addImage(bananaImage)
  banana.scale=0.1
  //adding obstacle
  obstacle =  createSprite(350,330,20,20)
  obstacle.addImage(obstacleImage)
  obstacle.scale=0.1
  
  score = createSprite(380,10,20,20)

  
  
}


function draw() {
  createCanvas(400,400)
  background(255);
 
  if(ground.x<0) {
    ground.x=ground.width/2;
  }

    if(keyDown("space") ) {
      monkey.velocityY = -12;
    }
    monkey.velocityY = monkey.velocityY + 0.8;
  
    monkey.collide(ground);   
    
  obstacle.velocityX = -2
  
  banana.velocityX = -2
  
   monkey.collide(obstacle);
   
  if(banana.isTouching(monkey)){
     banana.destroy()
     
     }
  
    text("score :"+score ,500,50)
  score=score+Math.round(frameCount/60)
  
  
  
  drawSprites();
  
}






