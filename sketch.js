
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var mango1, slingshot;
var tree, stone1;
//var chain1;

function preload(){
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stone1 = new stone(400,200,50,50);

	//chain1 =  new Chain(stone1.body,{x:400,y:200});
	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  //chain



  stone1.display();
	
  //chain1.display(); 
  
  drawSprites();
 
}



