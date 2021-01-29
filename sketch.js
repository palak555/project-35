var image,balloon;
var bgImage;
var database=firebase.database();



function preload(){
  bgImage=loadImage("bg.png");
  balloonImage=loadImage("hotAirBalloon.png")
  balloonImage2=loadImage("hotAirBalloon2.png")
  balloonImage3=loadImage("hotAirBallon3.png")
}

function setup() {
  createCanvas(1200,700);
  balloon=createSprite(250, 500, 50, 50);
  balloon.addImage(balloonImage)
  balloon.scale=0.7;

  

  var pos = database.ref("balloon/position");
  pos.on("value",readposition,showerror);
  
}

function draw() {
  background(bgImage);  

  if(keyDown(LEFT_ARROW)){
    balloon.x = balloon.x-10;
  }

  if(keyDown(RIGHT_ARROW)){
    balloon.x = balloon.x+10;
  }

  if(keyDown(UP_ARROW)){
    balloon.y=balloon.y-10;
    balloon.addImage(balloonImage2);
    balloon.scale=balloon.scale-0.01;
  }

  if(keyDown(DOWN_ARROW)){
    balloon.y=balloon.y+10;
    balloon.addImage(balloonImage3);
    balloon.scale=balloon.scale+0.01;
  }
  
  stroke("black")
  fill("black")
  textSize(18)
  text("**Use arrow keys to move the Hot Air Balloon...",20,40)
  


  drawSprites();
}

function readposition(data){
  var position=data.val();
  console.log(position)
  balloon.x=position.x;
  balloon.y=position.y;
}

function showerror(){
  console.log("there is error")
}

