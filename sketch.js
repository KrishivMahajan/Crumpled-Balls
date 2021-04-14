
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var d1,d2,d3,ball,ground;

function preload()
{
	
}

function setup() {
	createCanvas(1600,700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground=new Ground(800,height,1600,20);
paper=new Paper(200,450,40);
d1=new Dustbin(1000,650,250,20);
d2=new Dustbin(880,610,20,100);
d3=new Dustbin(1130,610,20,100);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  d1.display();
  d2.display();
  d3.display();
  paper.display();
  ground.display();

 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
      Matter.Body.applyForce(paper.body,paper.body.position,{x:350,y:-250})
	}
}

