//creates variable
var helicopterIMG, helicopterSprite, packageSprite, packageIMG;
var packageBody;
var box1,box2,box3;

//creates constant
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	//preloads images
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	
	//creates canvas
	createCanvas(800, 700);
    
	//adjusts rectangle to center
	rectMode(CENTER);
	
	//makes package sprite
	packageSprite=createSprite(width/2, 80, 20,20);
	//adds package
	packageSprite.addImage(packageIMG);
	//adjusts package sprite size image 
	packageSprite.scale=0.2;

	//makes helicopter sprite
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale = 0.6;

	//creates ground sprite
	groundSprite=createSprite(width/2, height-35, width,10);
	//adjusts ground color
	groundSprite.shapeColor=color(255);

	//creates own engine
	engine = Engine.create();
	//creates own world
	world = engine.world;

	//creates package
	packageBody = Bodies.circle(width/2 , 200 , 20 , {restitution:0.2, isStatic:true});
	//adds package body to world
	World.add(world, packageBody);

	//creates ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true});
 	World.add(world, ground);

	//adjusts box 
 	boxPosition = width/2-100;
 	boxY = 610;

	//creates box
 	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	boxBase.shapeColor=color(255,0,0);

	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);
	
	//runs own engine
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);

  //background color is black
  background(0);

  //position package sprite
  packageSprite.x = packageBody.position.x ;
  packageSprite.y = packageBody.position.y ;
  
  drawSprites();

  //moves helicopter move with key
  if(keyCode === RIGHT_ARROW){
	 helicopterSprite.x = helicopterSprite.x + 10 ;
	 Matter.Body.translate(packageBody,{x:10,y:0});
   }
  if(keyCode === LEFT_ARROW){
     helicopterSprite.x = helicopterSprite.x - 10;
	 Matter.Body.translate(packageBody,{x:-10,y:0});
   }
   //drops the package in box
  if(keyDown(DOWN_ARROW)){
	Matter.Body.setStatic(packageBody,false);
  }	
  }
