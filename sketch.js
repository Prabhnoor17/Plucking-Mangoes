
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	Boyimg = loadImage("boy.png")
	Treeimg = loadImage("tree.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Boy = createSprite(150,600,40,100);
	Tree = createSprite(600,500,50,200);
	Boy.addImage(Boyimg);
	Tree.addImage(Treeimg);

	Tree.scale = 0.5
	Boy.scale = 0.1

	ground = new Ground(400,680,800,20);

	stone = new Stone(150,500,40);

	slingShot = new Slingshot(stone.body, {x:150,y:500})



	
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  Engine.update(engine);

  drawSprites();

  ground.display();
  stone.display();
  slingShot.display();

  
  
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY})
}

function mouseReleased(){
	slingShot.fly();
}

