var stand1;
var box1,box2,box3,box4,box5;
var box6,box7,box8,box9;
var box10,box11,box12;
var box13,box14;
var box15;

var stand2;
var box16,box17,box18;

var stone;
var ground;
var count=0;

var backgroundImg;

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload() {
  
  getBackgroundImage();

}

function setup() {
  createCanvas(1220,600);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(610,600,1240,40);

  stand1 = new Ground(490,450,330,20);
  stand2 = new Ground(895,300,200,20);

  //stand1 bottomMost row(row1)
  box1=new Box(380,410,50,50);
  box2=new Box(435,410,50,50);
  box3=new Box(490,410,50,50);
  box4=new Box(545,410,50,50);
  box5=new Box(600,410,50,50);
  //stand1 row2
  box6=new Box(410,360,50,50);
  box7=new Box(463,360,50,50);
  box8=new Box(516,360,50,50);
  box9=new Box(569,360,50,50);
  //stand1 row3
  box10=new Box(435,310,50,50);
  box11=new Box(490,310,50,50);
  box12=new Box(545,310,50,50);
  //stand1 row4 
  box13=new Box(460,260,50,50);
  box14=new Box(515,260,50,50);
  //stand1 row5
  box15=new Box(485,210,50,50);

   //stand2 bottomMost row(row1)
   box16=new Box(840,260,50,50);
   box17=new Box(895,260,50,50);
   box18=new Box(950,260,50,50);
   //stand2 row2
   box19=new Box(860,205,50,50);
   box20=new Box(915,205,50,50);
   //stand2 row3
   box21=new Box(890,155,50,50);

   stone = new Stone(100,350,50,50);

   slingshot = new SlingShot(stone.body,{x:100, y:350});

}

function draw() {
 background("purple");

 if(backgroundImg)
    background(backgroundImg);



  Engine.update(engine);  

  fill("purple");
  ground.display();

  fill("Pink");
  stand1.display();
  stand2.display();

  fill("lightblue");
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();

  fill("pink");
  box6.display();
  box7.display();
  box8.display();
  box9.display();

  fill("purple");
  box10.display();
  box11.display();
  box12.display();

  fill("lightgreen");
  box13.display();
  box14.display();

  fill("pink");
  box15.display();

  fill("green");
  box16.display();
  box17.display();
  box18.display();

  fill("white");
  box19.display();
  box20.display();

  fill("pink");
  box21.display();

  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
  box17.score();
  box18.score();
  box19.score();
  box20.score();
  box21.score();

  stone.display();

  textSize(50);
  fill("orange");
  text("Tower Siege-3",480,80);

  textSize(25);
  fill(115,247,217);
  text("Score: "+count,1100,100);


  slingshot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
   slingshot.fly();
}

function keyPressed(){
  if(keyCode===32){
      slingshot.attach(stone.body);
  }
}

async function getBackgroundImage(){
  var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/kolkata");
  var responseJSON=await response.json();
  console.log(responseJSON);

  var dateTime=await responseJSON.datetime;
  console.log(dateTime);
  var hour=dateTime.slice(11,13);
  console.log(hour);

  if(hour>=6 && hour<18){
      bg="bg2.jpg";
  }
  else{
      bg="bg1.jpg";
  }
   backgroundImg=loadImage(bg);
}