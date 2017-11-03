function Game (){

  this.board = new Board(700,1300);
  this.enemies1 = new Enemies(10, 10, 10);
  this.enemies2 = new Enemies(10, 60, 20);
  this.enemies3 = new Enemies(10, 120, 5);
  this.enemiesArray = [new Enemies(10, 10, 10),new Enemies(10, 60, 20),new Enemies(10, 120, 5)];
  this.player = new Player(3, 500, 300, 50, 50);

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
    console.log("hay colision");
    alert ("you loose :(");
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
