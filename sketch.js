var dog, happyDog;
var database;
var foodS, foodStock;

function preload(){
  dog = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  
  database = firebase.database();
  foodStock = database.ref("value", readStock);
  
}


function draw() {  
  background(46, 139, 87);

  if(keyWentDown(UP_ARROW)){
    writeStocks(foodS);
    dog.addImage(happyDog);
  }

  textSize(20);
  fill("blue");
  text(foodStock);
  drawSprites();
}

function readStock(){
  foodS = data.val();
}

function writeStock(x){
  if(x<=0){
    x = 0;
  }else{
    x = x-1;
  }

  database.ref("/").update({
    Food: x
  })
}
