//variable declaration
var ball;
var edges;

function setup() {
  createCanvas(1000,1000);

  //sprites
  ball = createSprite(20,200,25,25);
  ball.shapeColor = "red";
  ball.velocityX = 4;
  ball.velocityY = 6;

  edges = createEdgeSprites();
  
}

function draw() {
  background("cyan");

  ball.bounceOff(edges);

  drawSprites();
}




