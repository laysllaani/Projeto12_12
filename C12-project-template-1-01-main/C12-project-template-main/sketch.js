var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.PNG","jake5.png");
 
}

function setup(){
  
  createCanvas(400,400);
 path = createSprite(200,200);
path.addImage(pathImg);
path.y = path.width /2;
path.scale=1.2;

boy = createSprite(200,300,50,20);
boy.addAnimation("correr", boyImg);
boy.scale=0.5;
  
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;

rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;

boy.collide(leftBoundary);
boy.collide(rightBoundary);

  boy.x=World.mouseX;

  edges= createEdgeSprites();

  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
