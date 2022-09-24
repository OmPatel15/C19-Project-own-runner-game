var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var obstaclesGroup
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  
  ghost = createSprite(200,200,50,50);
  ghost.addImage("ghost", ghostImg);
  ghost.scale=0.3;
  
  obstaclesGroup = createGroup();
  

}

function draw() {
  background(200);
  
  ghost.velocityY=2

 

  if(tower.y > 400){
      tower.y = 300
    }

    if(keyDown("space")){
      ghost.y= ghost.y-5
    }
    
    if(keyDown("left_Arrow")){
      ghost.x=ghost.x-5
    }

    if (keyDown("right_Arrow")){
      ghost.x=ghost.x+5
    }

    if(obstaclesGroup.isTouching(ghost)||ghost.y>550||ghost.x<75||ghost.x>525){
      ghost.visible = false
      obstaclesGroup.velocityY = 0
    }
    
    spawn_obstacles()
    drawSprites()
}


function spawn_obstacles(){
  if (frameCount % 130 === 0){
    var obstacle = createSprite(300,0,50,50);
    obstacle.velocityY =1;
    
     //generate random obstacles
     obstacle.x = Math.round(random(120,400));
      obstacle.addImage("obstacle",doorImg);
      
      
    
        
     obstacle.lifetime = 700;
    
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
     
  }
}
