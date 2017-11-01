
function Board () {
    this.canvas = document.createElement("canvas");

}

 Board.prototype.draw = function (){
  this.canvas.width = 1000;
  this.canvas.height = 350;
  this.context = this.canvas.getContext("2d");
  document.body.insertBefore(this.canvas, document.body.childNodes[0]);

};
Board.prototype.clear = function () {
  this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
};
 /*Board.prototype.score = function () {
  points = (Math.floor(this.frames/5));
  this.context.font = '18px serif';
  this.context.fillStyle = 'black';
  this.context.fillText('Score: '+points, 350, 50);
};*/



Board.prototype.move = function(){  //comprobar la colisión
};
