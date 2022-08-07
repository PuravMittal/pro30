class Block{
    constructor(x, y, width, height) {
        var options = {
            restitution :0.4,
            friction : 0.01,
            // set the isStatic property 
            isStatic : false
        }
        
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.image = loadImage("block.png");
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.visiblity = 255;
      }
      display(){
        imageMode (CENTER)
        var pos = this.body.position;
        if(this.body.speed <3){
          image(this.image,pos.x,pos.y,this.width, this.height);
        }
        else{

        
          push();
          //removes block from world
          World.remove(world, this.body);
          this.visiblity = this.visiblity - 5;

          //sets invisible blocks
          tint(255,this.visiblity);
          image(this.image , pos.x , pos.y ,this.width , this.height);
          pop();
        }


        }

      }
