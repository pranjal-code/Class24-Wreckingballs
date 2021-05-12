class Ball
{
  constructor (x,y,w,h,angle)
  {
    var options = 
    {
    friction : 0.005,
    density : 1
    }

    this.body = Bodies.rectangle(x,y,w,h,options);
    this.width = w;
    this.height = h;

    World.add (world,this.body);


  }
  display()
  {
     var pos = this.body.position;
     var angle = this.body.angle;
     push()

     translate(pos.x,pos.y);
     rotate(angle);
     //strokeWeight(4);
     stroke("white");
     fill ("#f9e25e");
     ellipse(0,0,this.width,this.height);
     pop()
  }

}