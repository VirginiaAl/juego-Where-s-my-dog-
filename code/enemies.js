var canvas = document.getElementById('enemies');
var ctx = canvas.getContext('2d');
var width = canvas.width;
var height = canvas.height;
//var x = 0;
//var y = 0;
//var v = 0;

// Constructor object Enemies
var Enemies = function(pX, pY, vX) {
  this.pX = pX; //positionX
  this.pY = pY; //positionY
  this.vX = vX; //velocity-movement in X

};

Enemies.prototype.move = function() { //function to move along the X in board in zig-zag
  if (this.pX < 0 || this.pX > width - 50) {
    this.vX = -this.vX;
  }

  ctx.fillStyle = "green";
  ctx.fillRect(this.pX, this.pY, 50, 30);
  this.pX += this.vX;


};
var clear = function() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, width, height);

};
var draw = function() {
  clear();
  enemies1.move();
};
var enemies1 = new Enemies(10, 10, 10);

var init = function() {

  var int = setInterval(draw, 60);
};

window.addEventListener('load', init);
