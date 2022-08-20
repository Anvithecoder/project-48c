var img1,img2,img3,img4,form,game
var gameState=0
var blackHat,paintingtool,mirror,eifletower,sofa,magnet,purse,snail,tie,tape,clock
var things={}
var playcards1,playcards2,playcards3
var apples1,apples2,apples3,apples4,apples5
var clock1,clock2,clock3,clock4,clock5,clock6
var shoe1,shoe2,shoe3,shoe4
var items
var button1
function preload() {
img1=loadImage("./img/image.jpg")
img2=loadImage("./img/image1.jpg")
img3=loadImage("./img/img3.jpg")
img4=loadImage("./img/img4.jpg")
img5=loadImage("./img/instruction2.png")
img6=loadImage("./img/img7.png")

}


function setup() {
  canvas = createCanvas(1100,700);
  button1=createSprite(820,580,800,500)
  button1.addImage(img6)
  button1.visible=false
game=new Game()
game.start()


}

function draw() {

  background(128);
  if(gameState===1){
    
    background(img4)
    game.play()
    
  }
  if(gameState===2){
    background(img5)
   button1.visible=true
   if(mousePressedOver(button1)){
    game.start2()
    gameState=3
   }

  }
  if(gameState===3){
    background(img1)
    game.play2()
  }

  fill ("red")
 text(mouseX+", "+mouseY,20,20)
 textSize(30)
 text("Number of Items Remaining: "+items,460,50)

 console.log(gameState)
drawSprites()


}




