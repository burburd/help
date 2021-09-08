const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
Matter.Composite.add(bridge.body,jointPoint);
jointLink = new Link(bridge,jointPoint);
var bridge,ground,otherground,link;


function setup() {
  createCanvas(800, 800);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(100,600,300,60)
  otherground = new Otherground(650,600,300,60)
  bridge = new Bridge(10,{x:250,y:600});
  rectMode(CENTER);
  
}

function draw() {
  background(51);
  Engine.update(engine);
 ground.show()
 otherground.show()
 bridge.show()
}
