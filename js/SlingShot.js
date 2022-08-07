class Slingshot{
    constructor(bodyA, pointB){
        //properties
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        //body constructor
        this.sling = Constraint.create(options);
        this.pointB=pointB;
        World.add(world, this.sling);
    }
    //makes the block release
    fly(){
        this.sling.bodyA =null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            
            //displays line between block and point
            strokeWeight(4);
            stroke(64,224,208)
            
            line(pointA.x , pointA.y , pointB.x , pointB.y)
        }
    }
    
}