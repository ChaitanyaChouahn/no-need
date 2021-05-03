class Ground{
   constructor(){
      var options = {
          isStatic:true,
          friction:0.4
      }
      this.body = Bodies.rectangle(450,670,90,20,options);
      World.add(world,this.body);
   }
   display(){
       rectMode(CENTER);
       fill (0);
       rect(450,670,900,20);
    }
}