var bg,bgImg;
var player, shooterImg, shooter_shooting,Zombie_Img,bullet_Img;


function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")
  bullet_Img = loadImage("assets/bullet.png")
  bgImg = loadImage("assets/bg.jpeg")
  Zombie_Img = loadImage("assets/zombie.png")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  
//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage("Standing",shooterImg)
 player.addImage("Shooting",shooter_shooting)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)

}

function draw() {
  background(0); 




  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


if(keyDown("RIGHT_ARROW")||touches.length>0){
  player.x = player.x+30
}
if(keyDown("LEFT_ARROW")||touches.length>0){
 player.x = player.x-30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.changeImage(Shooting)
  bullet.addImage(bullet_Img)
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}

drawSprites();
spawnzombies();
}

function spawnzombies() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    zombie = createSprite(windowWidth+10,100,20,20);
    zombie.addImage(Zombie_Img)
    zombie.y = Math.round(random(100,windowWidth-100))
    zombie.scale = 0.1;
    zombie.velocityX = -3;
    
    
    //assigning lifetime to the variable
    zombie.lifetime = 500 
    
    //adjust the depth
    zombie.depth = zombie.depth + 1;
    }
}