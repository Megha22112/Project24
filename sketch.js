
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

// var line1, line2, line3;
// var ground;
// var ball;

var dustbinObj, paperObject,groundObject	
var world;
var line1, line2,line3;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 600);
    

	engine = Engine.create();
	world = engine.world;

	// groundSprite=createSprite(width/2,540, width,10);
  // groundSprite.shapeColor=color("yellow")
  

	//dustbinObj=new Dustbin(1200,650);
	paperObject=new Paper(200,450,40);
	groundObject=new Ground(700,550,1600,20);
   


	//Create the Bodies Here.
	line1 = new Line(1100,500,10,70)
    line2 = new Line(1320,500,10,70) 
    line3 = new Line(1275,530,500,10)
  //   ball = new Paper(200,530,5) 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  
  line1.display()
  line2.display()
  line3.display()
  // ball.display()

  // drawSprites();


  //dustbinObj.display();
  paperObject.display();
  groundObject.display();
 
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
       
       Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
       
     }
   }

 