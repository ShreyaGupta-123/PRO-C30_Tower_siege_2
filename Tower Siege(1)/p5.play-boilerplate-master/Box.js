class Box{
    constructor(x,y,width,height){
        var options={
            isStatic:false,
            restitution:0,
            friction:3,
            density:1.2
        }
         
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
        this.Visibility=255;
    } 
    
    display(){
        var position=this.body.position;
        if (this.body.velocity.x<10){
        push();
        translate(position.x,position.y);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
            pop();
        }
        else{
            World.remove(world,this.body);
            push();
            this.Visibility=this.Visibility-5;
            tint(255,this.Visibility);
            pop();
        }
        }
    }
    

    