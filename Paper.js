class Ball {
    constructor (x,y,radius){
      var optios = {
        isStatic : false,
        restitution : 0.1,
        density : 1.5,
        friction : 0.5
      }
        
      this.body=Bodies.circle(x,y,radius,optios);
     this.image=loadImage("paper.png");
           this.radius = radius;
           World.add(world,this.body);   
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.position.angle;
        ellipseMode(RADIUS);
        rotate(angle);
        strokeWeight(2);
      stroke("blue");
        fill("cyan");
      image(this.image,pos.x,pos.y,this.radius,this.radius);
    }
}