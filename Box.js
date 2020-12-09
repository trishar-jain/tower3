class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.4,
       
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.visibility=255;
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;

    if(this.body.speed<3){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rect(0,0,50,50);
      
      pop();
    }

    else{
      
    World.remove(world,this.body);
    push(); 
    this.visibility=this.visibility-5;
    tint(255,this.visibility);
    
    pop();   

    }
  }

  score(){
    if(this.visibility<0 && this.visibility>-105){
       count++
    }
  }
};