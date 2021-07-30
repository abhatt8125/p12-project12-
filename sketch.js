var garden,rabbit;
var gardenImg,rabbitImg;
var appleImg
var leafImg
var orangeleafImg
var redleafImg




function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg=loadImage("leaf.png")
  orangeleafImg=loadImage("orangeLeaf.png")
  redleafImg=loadImage("redImage.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function createApple () {
  if(frameCount%80==0){
    apple=createSprite(random(50,350),40,10,10)
    apple.addImage(appleImg)
    apple.scale=0.10;
    apple.velocityY=4
    apple.lifetime=50
  
  } 
}


function createleaf () {
  if(frameCount%80==0){
    leaf=createSprite(random(50,350),40,10,10)
    leaf.addImage(leafImg)
    leaf.scale=0.05
    leaf.velocityY=2
    leaf.lifetime=300
  } 
}


function createOrangeleaf () {
  if(frameCount%80==0){
    Oleaf=createSprite(random(50,350),40,10,10)
    Oleaf.addImage(orangeleafImg)
    Oleaf.scale=0.05
    Oleaf.velocityY=2
    Oleaf.lifetime=300
  } 
}



function createRedleaf () {
  if(frameCount%80==0){
    Rleaf=createSprite(random(50,350),40,10,10)
    Rleaf.addImage(redleafImg)
    Rleaf.scale=0.05
    Rleaf.velocityY=2
    Rleaf.lifetime=300
  } 
}





function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x=World.mouseX
  createApple ();
  createleaf();
  createOrangeleaf();
  createRedleaf();

  drawSprites();
  
}

