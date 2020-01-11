var fixedRectangle, movingRectangle;
function setup() {
  createCanvas(1200,800);
  fixedRectangle = createSprite(800,400,50,90)
  movingRectangle = createSprite(600,400,40,80)
  fixedRectangle.shapeColor = "green";
  movingRectangle.shapeColor = "blue";
}


function draw() {
  background(255,255,255);  
  movingRectangle.x = World.mouseX;
  movingRectangle.y = World.mouseY;
  if(movingRectangle.x - fixedRectangle.x < fixedRectangle.width/2 + movingRectangle.width/2 
    && fixedRectangle.x - movingRectangle.x < fixedRectangle.width/2 + movingRectangle.width/2) {

    movingRectangle.shapeColor = "red";
    fixedRectangle.shapeColor = "red";
  } else {
    fixedRectangle.shapeColor = "green";
    movingRectangle.shapeColor = "blue";
  }
  drawSprites();
}