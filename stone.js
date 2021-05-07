class Stone
{

    constructor(x,y,r)
    {

        var options =
        {
          isStatic:false,
          restitution:0.1,
          friction:0.1,
          density:0.3

      
        }

     this.body = Bodies.circle(x,y,r/2,options)
     this.radius = r;

     this.image = loadImage("stone.png");

     World.add(world, this.body);

     
     
     

    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle;
        push()
        translate(pos.x, pos.y)
        rotate(angle)
        imageMode(CENTER)
        image(this.image,0,0, this.radius*2, this.radius*2)
        pop()
    }
}