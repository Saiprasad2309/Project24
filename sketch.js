
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground,rect1,rect2,rect3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	paper=new Paper(50,40,10,10);
	ground= new Ground(600,390,1200,20);
	rect1=createSprite(350,600,5,100,{isStatic:true});
	rect1.shapeColor = ("red");
	rect2=createSprite(450,650,210,5, {isStatic:true});
	rect2.shapeColor =("red");
	rect3=createSprite(550,600,5,100, {isStatic:true});
	rect3.shapeColor=("red");


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  paper.display();
  rect1.display();
  rect2.display();
  rect3.display();
  keyPressed();
  drawSprites();
 
}

function keyPressed(){
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paperobject.body,paperObject.Body.position,{x:85,y:-85}) 
}

}


