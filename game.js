function Game (){

  this.board = new Board(700,1300);
  this.enemies1 = new Enemies(10, 440, 10, "images/car1.png");
  this.enemies2 = new Enemies(10, 460, 20, "images/car2.png");
  this.enemies3 = new Enemies(10, 480, 5, "images/car3.png");
  this.enemies4 = new Enemies(10, 500, 15, "images/car1.png");
  this.enemies5 = new Enemies(10, 520, 25, "images/car2.png");
  this.enemies6 = new Enemies(10, 540, 8, "images/car3.png");
  this.enemiesArray = [new Enemies(10, 440, 10,"images/car1.png"),new Enemies(10, 460, 20,"images/car2.png"),new Enemies(10, 480, 5,"images/car3.png"),new Enemies(10, 500, 15,"images/car1.png"),
new Enemies(10, 520, 25,"images/car2.png"),new Enemies(10, 540, 8,"images/car3.png")];
  this.player = new Player(3, 500, 600, 50, 50);

}

Game.prototype.update = function (){
      this.board.draw();
      this.board.clear();
      this.board.drawGrid();


      for (i = 0; i < this.enemiesArray.length; i++){
        this.enemiesArray[i].clear();
        this.enemiesArray[i].move();
        this.enemiesArray[i].draw();
      }
      this.player.clear();
      this.player.draw();
for ( i = 0; i < this.enemiesArray.length; i++) {
  if (this.checkEnemyCollision(this.enemiesArray[i])) {
    //console.log("hay colision");
    alert ("oh doggy is dead :(");
  }
}


};
//comprobar la colisión

Game.prototype.checkEnemyCollision = function(obstacle){
   return !((this.player.pY  + 20 < obstacle.pY)    ||
           (this.player.pY    > obstacle.pY + 20) ||
           (this.player.pX + 30 < obstacle.pX )  ||
           (this.player.pX > obstacle.pX + 20));
};
