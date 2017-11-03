
function Board (height,width) {
  this.height = height;
  this.width = width;
  this.gridPixelSize = 50;
  this.canvas = document.createElement("canvas");

}

 Board.prototype.draw = function (){
  this.canvas.width = this.width;
  this.canvas.height = this.height;
  this.context = this.canvas.getContext("2d");
  document.body.insertBefore(this.canvas, document.body.childNodes[0]);

};
Board.prototype.drawGrid = function() {
  this.context.lineWidth = 0.5;
  this.context.strokeStyle = "#000000";
  // horizontal grid lines
  for(var i = 0; i <= this.height; i = i + this.gridPixelSize){
    this.context.beginPath();
    this.context.moveTo(0, i);
    this.context.lineTo(this.width, i);
    this.context.closePath();
    this.context.stroke();
  }
  // vertical grid lines
  for(var j = 0; j <= this.width; j = j + this.gridPixelSize){
    this.context.beginPath();
    this.context.moveTo(j, 0);
    this.context.lineTo(j, this.height);
    this.context.closePath();
    this.context.stroke();
  }
};


Board.prototype.clear = function () {
  this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
};
 /* Board.prototype.score = function () {
  points = (Math.floor(this.frames/5));
  this.context.font = '18px serif';
  this.context.fillStyle = 'black';
  this.context.fillText('Score: '+points, 350, 50);
}; */
