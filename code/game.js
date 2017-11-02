function Game (){

  this.board = new Board(500,1000);
  this.enemies1 = new Enemies(10, 10, 10);
  this.enemies2 = new Enemies(10, 60, 20);
  this.enemies3 = new Enemies(10, 120, 5);
  this.enemiesArray = [new Enemies(10, 10, 10),new Enemies(10, 60, 20),new Enemies(10, 120, 5)];
  this.player = new Player(3, 500, 300, 1000, 1000);

}

Game.prototype.update = function (){
  console.log(this.enemiesArray[0]);
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

  newGame.checkEnemyCollision();

};
//comprobar la colisión

Game.prototype.checkEnemyCollision = function(player){
  for (var enemiesArray = [] of (this.enemies1, this.enemies2, this.enemies3)){
     if (enemiesArray.pX == player.pX && enemiesArray.pY == player.pY){
       player.life = player.life -1;
     }
   };
};
