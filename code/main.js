
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
  player = new Player(0, 500, 300, 10, 10);

board.draw();

setInterval(function(){
    board.clear();

    for (i = 0; i < enemiesArray.length; i++){
      enemiesArray[i].clear();
      enemiesArray[i].move();
      enemiesArray[i].draw();
    }
    player.clear();
    player.draw();
  },60);

};

document.onkeydown = function(e) {
switch (e.keyCode) {
  case 38:
    player.moveUp();
    break;
  case 40:
    player.moveDown();
    break;
  case 37:
    player.moveLeft();
    break;
  case 39:
    player.moveRight();
    break;
}

};

/*
document.onkeyup = function(e) {
  stopMove();
};

function stopMove() {
    player.velocityX = 0;
    player.velocityY = 0;
};*/
