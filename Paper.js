class Paper{
    constructor(x,y,radius){
        var options={
            restitution:0.3,
            friction:0.5,
            density:1.2,
            isStatic:false
        }
        this.radius=radius;
        this.body=Bodies.circle(x,y,radius,options);
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angles=this.body.angle;
        push ();
        translate(pos.x,pos.y);
        rotate (angles);
        fill ("pink");
        ellipseMode(CENTER);
        ellipse(0,0,this.radius,this.radius);
 pop ();
    }
}