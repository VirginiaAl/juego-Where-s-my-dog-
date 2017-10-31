
//var canvas = document.getElementById("canvas");
//var context = canvas.getContext("2d");

 // Constructor object Enemies
function Enemies(pX, pY, vX) {
  this.pX = pX; //positionX
  this.pY = pY; //positionY
  this.vX = vX; //velocity-movement in X

};

Enemies.prototype.move = function() { //function to move along the X in board in zig-zag
  if (this.pX < 0 || this.pX > this.width - 50) {
    this.vX = -this.vX;
  }

};
Enemies.prototype.clear = function(){
  ctx = board.context;
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, this.width, this.height);
};
Enemies.prototype.draw = function(){

  ctx = board.context;
  ctx.fillStyle = "green";
  ctx.fillRect(this.pX, this.pY, 50, 30);
  this.pX += this.vX;

};
