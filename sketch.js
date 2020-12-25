
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree,tre;

function preload()
{
	tre=loadImage("tree.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boy1=new boy(stone.body,{x:200,y:600});
	stone=new Stone(200,600);
	tree=createSprite(700,600);
	tree.addImage("tree",tre);
	mangoe1=new mangoes(200,200);
	mangoe2=new mangoes(100,200);
	mangoe3=new mangoes(200,100);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  boy1.display();
  stone1.display();
  tree.display();
  mangoe1.display();
  mangoe2.display();
  mangoe3.display();

  keyPressed();

  detectCollision(stoneObj,mangoe1);
  detectCollision(stoneObj,mangoe2);
  detectCollision(stoneObj,mangoe3);
  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode===32){
		Matter.Body.setPosition(stoneObj.body,{x:235,y:420});
		launcherObject.attach(stoneObj.body);
	}
}

function detectCollision(Lstone,Lmango){
	mangoBodyPosition=Lmango.body.position;
	stoneBodyPosition=Lstone.body.position;
	
	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if (distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}


