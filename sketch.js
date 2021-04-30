const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var dustbin, paper,ground;	
var launcher;
var world,engine;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	paper=new Paper(200,250,70);
	ground=new Ground(width/2,470,width,20);
	dustbin=new Dustbin(1200,450);

	launcher = new Launcher(paper.body,{x:200,y:170});

	Engine.run(engine); 
}

function draw() {
  rectMode(CENTER);
  background(230);
  paper.display();
  ground.display();
  dustbin.display();
  launcher.display();
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {
    	Matter.Body.applyForce(paper.body,paper.body.position,{x:130,y:-145});
  	}
}

function mouseDragged(){
    Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    launcher.fly();
}



