

 // Constructor object Enemies
function Enemies(pX, pY, vX, images) {
  this.pX = pX; //positionX
  this.pY = pY; //positionY
  this.vX = vX; //velocity-movement in X
  this.img = new Image();
  this.img.src = images;
  this.img.addEventListener('load', this.draw.bind(this));
};

Enemies.prototype.move = function() { //function to move along the X in board in zig-zag
  if (this.pX < 0 || this.pX > newGame.board.width - 100) {
    this.vX = -this.vX;
  }

};
Enemies.prototype.clear = function(){
  ctx = newGame.board.ctx;
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, this.width, this.height);
};
Enemies.prototype.draw = function(){

  ctx = newGame.board.ctx;
  this.pX += this.vX;
  ctx.drawImage(this.img,this.pX,this.pY,100,80);

};
