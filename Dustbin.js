class Dustbin {
    constructor(x, y, width, height) {

      var options={
        isStatic :true
      }
     
      this.body = Bodies.rectangle(x, y, width, height,options);
      this.image = loadImage("dustbingreen.png");
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.position.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      image(this.image, 0,-70, this.width, this.height);
      pop();
    }
  }
  