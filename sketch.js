const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, backgroundImg;
var canvas, angle, tower, ground, cannon;
var cannonBall;
//crie a matriz balls e atribua-lhe um valor vazio → var balls = [];


function preload() 
{
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
}

function setup() 
{
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  angleMode(DEGREES);
  angle = 15;

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, { isStatic: true });
  World.add(world, ground);

  tower = Bodies.rectangle(160, 350, 160, 310, { isStatic: true });
  World.add(world, tower);
  cannon = new Cannon(180, 110, 130, 100, angle);
  cannonBall = new CannonBall(cannon.x, cannon.y);
}

function draw() 
{
  background(189);
  image(backgroundImg, 0, 0, width, height);

  Engine.update(engine);

  push();
  fill("brown");
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, width * 2, 1);
  pop();

  push();
  imageMode(CENTER);
  image(towerImage, tower.position.x, tower.position.y, 160, 310);
  pop();

  //loop para obter todas as balas da matriz de balas
  for(var i = 0; i < balls.length; i++)
  {
    //chame showCannonBalls → showCannonBalls(balls[i]);
    
  }

  cannon.display();
  
}


function keyReleased() 
{
  if (keyCode === DOWN_ARROW) 
  {
   //para disparar as balas subastitua o código abaixo por → balls[balls.length - 1].shoot(); 
    cannonBall.shoot();
  }
}

//quando a tecla para baixo é pressionada cria uma nova bala e a coloca na matriz
function keyPressed()
{
  //condição a ser verificada: keyCode === DOWN_ARROW
  if()
  {
    //crie um novo objeto da classe CannonBall → var cannonBall = new CannonBall(cannon.x, cannon.y);
    
    //adicione cannonBall à matriz balls → balls.push(cannonBall);
    
  }
}

//função para exibir as balas
function showCannonBalls(ball)
{
  //condição a ser verificada → ball
  if()
  {
    //exiba ball com o método display() → ball.display();
    
  }
}