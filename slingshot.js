class Slingshot
{
constructor(body, point){

    var options = {
     bodyA:body,pointB:point,
     stiffness:0.5,
     length:100
    }
    this.sling = Matter.Constraint.create(options)
    this.bodyA = body;
    this.pointB = point;
    World.add(world,this.sling)

}

fly(){
    this.sling.bodyA = null;
}

display()
{
    if(this.sling.bodyA){
    var pos = this.sling.bodyA.position
    var pt = this.pointB
    strokeWeight(3)
    line(pos.x,pos.y,pt.x,pt.y)
}
}
}