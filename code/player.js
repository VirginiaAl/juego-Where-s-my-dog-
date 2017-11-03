//Constructor Objetct player

function Player(life, pX, pY, vX, vY){
  this.life = life;    //número de vidas
  this.pX = pX;   //
  this.pY = pY;
  this.vX = vX;   //movimiento en el eje x
  this.vY = vY;   //movimiento en el eje y
};



Player.prototype.moveUp = function() {
  this.pY -= 50;
};

Player.prototype.moveDown = function() {
  this.pY += 50;
};

Player.prototype.moveLeft = function() {
  this.pX -= 50;
};

 Player.prototype.moveRight = function() {
  this.pX += 50;
};
Player.prototype.clear = function(){
  ctx = newGame.board.context;
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, this.width, this.height);
};

Player.prototype.draw = function(){
  ctx = newGame.board.context;
  ctx.fillStyle = "black";
  ctx.fillRect(this.pX, this.pY, 50, 30);

};
