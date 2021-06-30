var bgImg,spacecraftImg1,spacecraftImg2,spacecraftImg3,spacecraftImg4,issImg,spacecraft,iss,isDocked = false,da;

function preload()
{
  spacecraftImg1 = loadImage("spacecraft1.png")
  spacecraftImg2 = loadImage("spacecraft2.png")
  spacecraftImg3 = loadImage("spacecraft3.png")
  spacecraftImg4 = loadImage("spacecraft4.png")
  bgImg = loadImage("spacebg.jpg")
  issImg = loadImage("iss.png");

}




function setup() {
  createCanvas(800,400);
iss =  createSprite(600, 120, 50, 50);
iss.addImage(issImg);
iss.scale = 0.6;

spacecraft = createSprite(40,330,20,20);
spacecraft.addImage(spacecraftImg1);
spacecraft.scale = 0.2;

da = createSprite(560,135,20,20);
da.visible = false;

}

function draw() {
  background(bgImg);  

if(spacecraft.isTouching(da)){
  isDocked = true;
}

if(!isDocked){

if(keyDown("Up_Arrow")){
spacecraft.addImage(spacecraftImg2);
spacecraft.y = spacecraft.y - 5;

}
if(keyDown("Down_Arrow")){
  spacecraft.addImage(spacecraftImg1);
  spacecraft.y = spacecraft.y + 5;
  
  }

  if(keyDown("Right_Arrow")){
    spacecraft.addImage(spacecraftImg3);
    spacecraft.x = spacecraft.x +5;
    
    }

    if(keyDown("Left_Arrow")){
      spacecraft.addImage(spacecraftImg4);
      spacecraft.x = spacecraft.x - 5;
      
      }
}else if (isDocked === true){

  textSize(30);
  fill("white");
  text("DOCKED SUCCESSFULY!",200,300);

}





  drawSprites();
}