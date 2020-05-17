class Tanker {
  constructor(x, y, width, height) {
      var options = {
      isStatic: true
     }
    this.body = Bodies.rectangle(x,y,width,height,options);
     this.height = height;
     this.width = width;
  };

  display(){
      // Draw the tanker the way you like.
      // You could also use an image if you want a specific look
      rect(67,350,100,30);
      rect(120,310,50,20);
      arc(70,height-65,90,100,PI,TWO_PI);
    };
}
