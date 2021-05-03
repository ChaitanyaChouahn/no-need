
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var throw1;
var ground1,tree,treeImg
var boy,boyImg
var stone1;
var mango1,mango2,mango3,mango4,mango5,mango6
function preload()
{
  treeImg = loadImage("Plucking mangoes/tree.png");
  boyImg = loadImage("Plucking mangoes/boy.png")	;
}

function setup() {
	createCanvas(900, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
//boy = createSprite(150,605);
//boy.addImage(boyImg);
//boy.scale = 0.09;


//tree = createSprite(650,400);
//tree.addImage(treeImg);
//tree.scale = 0.42;


ground1 = new Ground();
stone1 = new Stone(100,545,30);

mango1 = new Mango(800,250,30);
mango2 = new Mango(600,250,30);
mango3 = new Mango(650,200,30);
mango4 = new Mango(750,200,30);
mango5 = new Mango(800,300,30);
mango6 = new Mango(700,280,30);

throw1 = new Throw(stone1.body,{x:100, y :545});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0,255,255);
  image(boyImg,50,505,200,200);
  image(treeImg,350,100,600,600);

//  drawSprites()
  ground1.display();
  stone1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
throw1.display();
isTouching(stone1 ,mango1);
isTouching(stone1 ,mango2);
isTouching(stone1 ,mango3);
isTouching(stone1 ,mango4);
isTouching(stone1 ,mango5);
isTouching(stone1 ,mango6);
} 

function mouseDragged(){
  Matter.Body.setPosition( stone1.body,{x:mouseX , y: mouseY} )
} 

function mouseReleased(){
  throw1.fly();
}
function keyPressed(){
  if (keyCode === 32){
throw1.Launch(stone1.body);

  }
}
function isTouching(stone,mango){
  /*if(stone.body.position.x - mango.body.position.x < mango.diameter/2 + stone.diameter/2 && 
    mango.body.position.x -stone.body.position.x < mango.diameter/2 + stone.diameter/2 &&
    stone.body.position.y - mango.body.position.y < mango.diameter/2 + stone.diameter/2 &&
    mango.body.position.y - stone.body.position.y < mango.diameter/2 + stone.diameter/2 ){

      Matter.Body.setStatic(mango.body,false);
  
  }*/
  var mangopos= mango.body.position
 var stonepos = stone.body.position
 var distance = dist(mangopos.x,mangopos.y ,stonepos.x,stonepos.y)
if(distance <= mango.diameter/2 + stone.diameter/2){
  Matter.Body.setStatic(mango.body,false);
}

}