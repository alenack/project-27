/*class Rope{
    constructor(body1,body2, offsetX, offsetY){
        this.offsetX = offsetX
        this.offsetY = offsetY
        var options = {
            bodyA:body1,
            bodyB:body2,
           // length:10,
           // stiffness:0.04,
            pointB:{x:this.offsetX, y:this.offsetY}
            
           
        }
       this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }
    display(){
        var pointA = this.rope.bodyA.position
        var pointB = this.rope.bodyB.position

        strokeWeight(2);
        stroke("pink")

        var Anchor1X=pointA.x
        var Anchor1Y=pointA.y

        var Anchor2X=pointB.x+this.offsetX
        var Anchor2Y=pointB.y+this.offsetY
        line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
         
    }
    
}*/

class Rope{
    constructor(bodyA, bodyB, offsetX, offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;


        var options = {
            bodyA : bodyA,
            bodyB : bodyB,
            pointB:{x:this.offsetX, y:this.offsetY}
        }

        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        strokeWeight(2);
        stroke("pink")

        var P1X = pointA.x;
        var P1Y = pointA.y;

        var P2X = pointB.x+this.offsetX;
        var P2Y = pointB.y+this.offsetY;

        line(P1X, P1Y, P2X, P2Y);
    }
}