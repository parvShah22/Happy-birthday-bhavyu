var man,manImage;

function preload (){
  manImage=loadImage("h.jpg")
  webSound = loadSound("birthday song.mp3")
  
}
function setup(){
   createCanvas(windowWidth, windowHeight);

  man = createSprite(200,200,200,200)
  man.addImage(manImage)
  man.scale=2.0;
}

function draw(){
  webSound.play()
  
  drawSprites()
  
  
}
