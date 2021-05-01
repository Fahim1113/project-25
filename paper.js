class Paper{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2
        }
        this.paper=Bodies.circle(x,y,r,options);
        this.x=x;
        this.y=y;
        this.r=r;
        this.image=loadImage("paper.png");
        World.add(world, this.paper);

    }
    display(){
        var paperPosX=this.paper.position.x;		
        var paperPosY=this.paper.position.y;		
        var angle = this.paper.angle;
			push()
			translate(paperPosX, paperPosY);
			rotate(angle)
            imageMode(CENTER)
			//strokeWeight(4);
			image(this.image,0,0,this.r,this.r);
			pop()
	}
}