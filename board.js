
function Board (height,width) {
  this.height = height;
  this.width = width;
  this.gridPixelSize = 50;
  this.ctx = context;
  this.img = new Image();
  this.img.src = "images/background.jpg";
  this.img.addEventListener('load', this.draw.bind(this));
}
//draw background
 Board.prototype.draw = function (){
  this.ctx.clearRect(0, 0, this.width, this.height);
  this.ctx.drawImage(this.img, 0, 0, this.width, this.height);
};
//draw grid
Board.prototype.drawGrid = function() {
  this.ctx.lineWidth = 0.15;
  this.ctx.strokeStyle = "#000000";
  // horizontal grid lines
  for(var i = 0; i <= this.height; i = i + this.gridPixelSize){
    this.ctx.beginPath();
    this.ctx.moveTo(0, i);
    this.ctx.lineTo(this.width, i);
    this.ctx.closePath();
    this.ctx.stroke();
  }
  // vertical grid lines
  for(var j = 0; j <= this.width; j = j + this.gridPixelSize){
    this.ctx.beginPath();
    this.ctx.moveTo(j, 0);
    this.ctx.lineTo(j, this.height);
    this.ctx.closePath();
    this.ctx.stroke();
  }
};


Board.prototype.clear = function () {
  this.ctx.clearRect(0, 0, this.ctx.width, this.ctx.height);
};
 /* Board.prototype.score = function () {
  points = (Math.floor(this.frames/5));
  this.ctx.font = '18px serif';
  this.ctx.fillStyle = 'black';
  this.ctx.fillText('Score: '+points, 350, 50);
}; */
