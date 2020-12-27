const Engine = Matter.Engine;
const World = Matter.World;
const Bodies= Matter.Bodies;

function preload() {

BGimage = loadImage("BG.jpg");

}

function setup() {
  var canvas = createCanvas(1200,400);

  engine = Engine.create();
  world = engine.world;

  
  ground = new Ground(600,400,1200,5);

  log = new Log(980,395,70,3);
  log1 = new Log(1014,355,3,75);
  log2 = new Log(944,355,3,75);

  dustbin = new Dustbin(939,390,80,80);
  
  paper = new Ball(100,25,30);

 
}

function draw() {
  background(BGimage); 
  Engine.update(engine);
  ground.display();

  paper.display();

  log.display();
  log1.display();
  log2.display();

  dustbin.display();
  
text("X"+mouseX+","+"Y"+mouseY,mouseX,mouseY);

}
function keyPressed() {
  if (keyCode === RIGHT_ARROW) {

    Matter.Body.applyForce (paper.body , paper.body.position,{x:125,y:-125});

  }
  else if (keyCode === DOWN_ARROW) {

    Matter.Body.applyForce (paper.body , paper.body.position,{x:-35,y:35});

  }
  
}