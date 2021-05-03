class Throw{
    constructor(body1 ,pointB){
        var options = {
            bodyA : body1,
            pointB : pointB,
            stiffness : 0.01,
            length : 10
        }
        this.pointB = pointB;
        this.throw = Matter.Constraint.create(options);
        World.add(world,this.throw);
    }
    fly(){
        this.throw.bodyA = null;
    }
    Launch(bodyA){
        this.throw.bodyA=bodyA;
    }
    display(){
 
    }
}