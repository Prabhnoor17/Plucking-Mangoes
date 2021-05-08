
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

	stone = new Stone(150,500,20);

	slingShot = new Slingshot(stone.body, {x:150,y:500})

	mango1 = new Mango(600, 300, 20);
	mango2 = new Mango(550, 300, 40);
	



	
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  Engine.update(engine);

  drawSprites();

  ground.display();
  stone.display();
  slingShot.display();

  mango1.display();
  mango2.display();

  collission(mango1,stone);
  collission(mango2,stone);
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY})
}

function mouseReleased(){
	slingShot.fly();
}

function collission(mango,stone){
	var posMango = mango.body.position
    var posStone = stone.body.position
	var MR = mango.body.circleRadius
	var SR = stone.body.circleRadius

	if(posMango.x - posStone.x < MR+SR && 
		posStone.x - posMango.x < MR+SR &&
		posMango.y - posStone.y < MR + SR &&
		posStone.y - posMango.y < MR+SR){

			Matter.Body.setStatic(mango.body, false);

	}
	
}
