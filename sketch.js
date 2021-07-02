var SpaceShip
var background0
var backGround
var spaceShipImg
var Asteroid
var AsterImg
var AsterGroup

function preload(){
background0=loadImage("BackGround.png")
  spaceShipImg=loadImage("Ship.png")
  AsterImg=loadImage("Asteroid.png")
}

function setup() {
  createCanvas(600,600)
  backGround=createSprite(200,500,400,800)
  backGround.addImage("space",background0)
 SpaceShip=createSprite(200,400,50,40)
  SpaceShip.addImage("Ship0",spaceShipImg)
  SpaceShip.scale=0.05
  AsterGroup=new Group()
  }

function draw() {
  background(0)
  
if(keyDown("up_arrow")){
  SpaceShip.velocityY=-2
}
  if(keyDown("down_arrow")){
    SpaceShip.velocityY=2
  }
  if(keyDown("right_arrow")){
    SpaceShip.velocityX=3
  }
  if(keyDown("left_arrow")){
    SpaceShip.velocityX=-3
  }
  spawnAsteroids()
  
  drawSprites()
}
function spawnAsteroids() {
  
  if (frameCount % 100 === 0) {
    var Asteroid = createSprite(200,1,40,10);
    Asteroid.y = Math.round(random(80,120));
    Asteroid.addImage("aster",AsterImg);
    Asteroid.scale = 0.08;
    Asteroid.velocityY = 3;
    
     
    Asteroid.lifetime = 200;
    
    
    AsterGroup.add(Asteroid);
  } 
}
    
  
