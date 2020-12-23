var bg;
var tunnel;
var tool1,tool2,tool3,tool4;

function preload() 
{
  player_img=loadAnimation("image/one.png")
  player_img1=loadAnimation("image/two.png");
  player_img2 = loadImage("image/four.png");
  player_img3 = loadImage("image/five.png");
 // bg=loadImage("images/Background.png");
 // tunnel =loadImage("images/tunnel2.png");
  //tree=loadImage("images/Tile_34.png");
  tool1 = loadImage("carbon.jpeg");
  tool2 = loadImage("helium.jpeg");
  tool3 = loadImage("nitrogen.jpeg");
 

}

function setup() {
  createCanvas(displayWidth,displayHeight);
  player=createSprite(500,100);
  player.addAnimation("one",player_img);
  player.addAnimation("two",player_img1);
  player.addAnimation("three",player_img2);
  player.addAnimation("four",player_img3);
  player.scale=4;
  player.velocityY=2;

}

function draw() {
  background("black");
  //image(tree,100,250);
 // image(tunnel,displayWidth-500,100,200,600)
 
 if (keyWentDown("space")) {
 
    
  player.changeAnimation("two");
  
 }
 player.x=mouseX;
 player.y=mouseY;
if(frameCount% 150 === 0){
  spawnTools();
}
if(player.x > 500){
  player.changeAnimation("three");
}
if(player.x < 500){
player.changeAnimation("four");
}
  drawSprites();
}
function spawnTools()
 {
   
   var tools =createSprite(0,random(100,800),50,50);
   tools.addImage(tool1);
   tools.scale=0.5
  
  
   var rand = Math.round(1,3);
   if(rand === 1){
     tool1=loadImage("helium.jpeg");
     
   }
    
   if(rand === 2){
    tool1= loadImage("nitrogen.jpeg");
 
  }

  if(rand === 3){
    tool1= loadImage("carbon.jpeg");
  }

  

  tools.velocityX=2;
   
 }
 