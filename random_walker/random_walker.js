let chance;
let pos;
let speed; 
let last; 
function setup() {
  createCanvas(400,400)
  background(0)
  pos = createVector(width/2, height/2)
  last = pos.copy() 
}


function draw() {
   
  speed = p5.Vector.random2D();
  chance = random(100)
  if(chance < 5){ 
    speed.setMag(50)
  }
  else{ 
    speed.setMag(5)
  }
  stroke(255)
  
  pos.add(speed)
  line(last.x, last.y, pos.x, pos.y)
  last.set(pos)
}
