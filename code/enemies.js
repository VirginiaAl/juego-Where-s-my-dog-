

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
  if (this.pX < 0 || this.pX > newGame.board.ctx.width - 50) {
    this.vX = -this.vX;
  }

};
Enemies.prototype.clear = function(){
  ctx = newGame.board.ctx;
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, this.width, this.height);
};
Enemies.prototype.draw = function(){
/*  var img = new Image();
  img.src = "./images/car1.png";
  img.onload = function(){
  ctx = board.context;
  this.pX += this.vX;
}*/

  ctx = newGame.board.ctx;
  ctx.fillStyle = "green";
  ctx.fillRect(this.pX, this.pY, 50, 30);
  this.pX += this.vX;
  ctx.drawImage(this.img,this.pX,this.pY,50,30);

};
