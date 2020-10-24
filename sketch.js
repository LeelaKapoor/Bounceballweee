const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var engine,world
var ground
var ball

function setup() {
  createCanvas(400,400);
  //createSprite(400, 200, 50, 50);
  engine=Engine.create();
  world=engine.world;
  var object_options={isStatic:false
}
  object=Bodies.rectangle(200,100,50,50,object_options)
  World.add(world,object)
  var ground_options={isStatic:true}
  ground=Bodies.rectangle(200,390,200,20,ground_options)
  World.add(world,ground)
  console.log(object)
  var ball_options={restitution:1.0}
  ball=Bodies.circle(300,100,20,ball_options)
  World.add(world,ball)
}

function draw() {
  background(0); 
  Engine.update(engine)
  rectMode(CENTER)
  rect(object.position.x,object.position.y,50,50) 
  rect (ground.position.x, ground.position.y, 400, 20)
  ellipseMode (RADIUS)
  ellipse(ball.position.x, ball.position.y, 20,20)
  
}