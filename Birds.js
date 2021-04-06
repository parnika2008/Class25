class Birds{
    constructor(x,y){
        var option={
            restitution:0.8,
            friction:1,
            density:1
        }
        this.body=Bodies.rectangle(x,y,50,50,option);
        this.width=50;
        this.height=50;
        World.add(world,this.body);
    }

display(){

    var pos=this.body.pos;
    rectMode(CENTER);
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER)
    strokeWeight(4);
    stroke("green")
    fill(225);
    rect(0,0,this.width,this.height);
    pop()
}
}