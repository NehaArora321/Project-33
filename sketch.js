const Engine = Matter.Engine;
const  World = Matter.World;
const  Events = Matter.Events;
const  Bodies = Matter.Bodies;
 
var particles=[];
var plinkos = [];
var divisions=[];
var obj_rows=[];

var divisionHeight=300;
var score =0,turn=0;
var scorenum=25;
var click_it=false;

var gameState="play";
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }    

    
}
 

function draw() {
  background("black");
  textSize(20)
  text("500",scorenum,height/2+150);
  text("500",scorenum+80,height/2+150);
  text("500",scorenum+80*2,height/2+150);
  text("500",scorenum+80*3,height/2+150);
  text("100",scorenum+80*4,height/2+150);
  text("100",scorenum+80*5,height/2+150);
  text("100",scorenum+80*6,height/2+150);
  text("200",scorenum+80*7,height/2+150);
  text("200",scorenum+80*8,height/2+150);
  text("200",scorenum+80*9  ,height/2+150);

  push();
  stroke("yellow");
  strokeWeight(5);
    line(10,height/2+50,width,height/2+50);
    pop();

   // text("x:"+mouseX+" , y:"+mouseY,mouseX,mouseY)
 text("Score : "+score,20,30);
  Engine.update(engine);
  ground.display();
  
    for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  //  if(frameCount%60===0){
  //    particles.push(new Particle(random(100, 700), 10,10));
  //    score++;
  //  }
 
  // for (var j = 0; j < particles.length; j++) {
   
  //    particles[j].display();
  //  }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if(particles.length>0){
    for (var j = 0; j < particles.length; j++) {
        particles[j].display();
    }

    if(particles[particles.length-1].body.position.y > height-100 && click_it===true){
      if(particles[particles.length-1].body.position.x < 320 && particles[particles.length-1].body.position.x>10){
        score=score+500;
        click_it=false;
      }
      else if(particles[particles.length-1].body.position.x > 320 && particles[particles.length-1].body.position.x < 580){
        score=score+100;
        click_it=false;
      }
      else if(particles[particles.length-1].body.position.x > 580 && particles[particles.length-1].body.position.x < 780){
        score=score+200;
        click_it=false;
      }
    }

    if(turn===5 ){
      //gameState="end";
     }
   }

  if(gameState==="end"){
    textSize(55);
    text("Game Over",200,250);
  }
}

function mousePressed(){
  if(gameState==="play"){
    turn++;
    click_it=true;
    //particles=new Particle(mouseX, 10,10);
    var obj=new Particle(mouseX, 10,10);
    particles.push(obj);
  }
}