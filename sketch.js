var fixedRectangle, movingRectangle;
var gameOb1, gameOb2, gameOb3, gameOb4;

function setup() {
  createCanvas(1200, 800);
  fixedRectangle = createSprite(800, 400, 50, 90);
  movingRectangle = createSprite(600, 400, 40, 80);
  gameOb1 = createSprite(100,200,50,50);
  gameOb2 = createSprite(200,200,50,50);
  gameOb3 = createSprite(300,200,50,50);
  gameOb4 = createSprite(400,200,50,50);
  gameOb1.shapeColor = "green";
  gameOb2.shapeColor = "green";
  gameOb3.shapeColor = "green";
  gameOb4.shapeColor = "green";
  fixedRectangle.shapeColor = "green";
  movingRectangle.shapeColor = "blue";
}

function draw() {
  background(255, 255, 255);
  movingRectangle.x = World.mouseX;
  movingRectangle.y = World.mouseY;
  if(isTouching(movingRectangle,gameOb1))  {
    movingRectangle.shapeColor = "red";
    gameOb1.shapeColor = "red";
  } else {
    gameOb1.shapeColor = "green";
    movingRectangle.shapeColor = "blue";
  }
  gameOb2.velocityX = -10;
  bounceOff(gameOb2,gameOb1);
  drawSprites();
}

function isTouching(p1,p2) {
  if (p1.x - p2.x <
    p2.width / 2 + p1.width / 2 &&
    p2.x - p1.x <
    p2.width / 2 + p1.width / 2 ||
    /* ----------- End of left+right collision ---------- */
    p1.y - p2.y <
    p2.length / 2 + p1.length / 2 &&
    p2.y - p1.y <
    p2.length / 2 +p1.length / 2) 
  {
    return true;
  } else {
    return false;
  }
}

function bounceOff(p1,p2) {
  if (p1.x - p2.x <
    p2.width / 2 + p1.width / 2 &&
    p2.x - p1.x <
    p2.width / 2 + p1.width / 2) 
    /* ----------- End of left+right collision ---------- */
    /*p1.y - p2.y <
    p2.length / 2 + p1.length / 2 &&
    p2.y - p1.y <
    p2.length / 2 +p1.length / 2) */
  {
    if(-((p1.x-p2.x)/-(p1.x-p2.x)) == 1) {
      p2.velocityX = null;
    }
  }
}
