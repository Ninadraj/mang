class Stone{
        constructor(x,y){
          super(x,y,50,50);
          this.image = loadImage("Plucking mangoes/stone.png");
        }

           varoptions={
            isStatic:false,
            friction:1,
            restitution:0,
            density:1.2,
        }
      
        display() {
          //this.body.position.x = mouseX;
          //this.body.position.y = mouseY;
      
          super.display();
        }
      }
      
}