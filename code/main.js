//Enemies
var player;
var enemies1;
var enemies2;
var enemies3;
var board;
var enemiesArray=[];

window.onload = function() {
  console.log("hola");
   board = new Board();
   enemies1 = new Enemies(10, 10, 10);
   enemies2 = new Enemies(10, 60, 20);
   enemies3 = new Enemies(10, 120, 5);
  enemiesArray.push(enemies1,enemies2,enemies3);
  //player = new Player(0, 30, 30, 10, 10);

board.draw();

var interval = setInterval(function(){

    //player.clear();
    //player.move();
    //player.draw();
    for (i = 0; i < enemiesArray.length; i++){
      enemiesArray[i].clear();
      enemiesArray[i].move();
      enemiesArray[i].draw();
    }


  },60);

};

// Player




/*
player.prototype.moveUp = function () {
  player.velocityY -= 1;
};

function moveDown() {
  player.velocityY += 1;
}

function moveLeft() {
  player.velocityX -= 1;
}

function moveRight() {
  player.velocityX += 1;
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
    player.velocityX = 0;
    player.velocityY = 0;
};


  */
