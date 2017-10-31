/*var canvas = document.getElementById('player');
var context = canvas.getContext('2d');

//Constructor Objetct player

function Player(life, pX, pY, vX, vY){
  this.life = life;    //número de vidas
  this.pX = pX;   //
  this.pY = pY;
  this.vX = vX;   //movimiento en el eje x
  this.vY = vY;   //movimiento en el eje y
};

Player.prototype.leaveLife = function(){  //si choca pierde vidas

Player.prototype.move = function(){  //move player with arrow key

  function moveUp() {
     this.vY -= 1;
  };

  function moveDown() {
     this.vY += 1;
  }

  function moveLeft() {
    this.vX -= 1;
  }

  function moveRight() {
    this.vX += 1;
  }

  document.onkeydown = function(e) {
    switch (e.keyCode) {
      case 38:
      case W:
        moveUp();
        break;
      case 40:
      case S:
        moveDown();
        break;
      case 37:
      case A:
        moveLeft();
        break;
      case 39:
      case D:
        moveRight();
        break;
    }
  };

  document.onkeyup = function(e) {
    stopMove();
  };

  function stopMove() {
      this.vX = 0;
      this.vY = 0;
  };

};

Player.prototype.clear = function(){
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
};
Player.prototype.draw = function(){
  ctx = Board.context;
  ctx.arc(this.pX, this.pY, 30, 0, Math.PI * 2, false);
  ctx.stroke();
  ctx.fill();
};
};  */
