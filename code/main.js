
var player;
var enemies1;
var enemies2;
var enemies3;
var board;
var enemiesArray=[];
var newGame;

window.onload = function() {
  console.log("hola");
    newGame= new Game ();
    console.log(newGame);
   setInterval(function(){newGame.update();},60);
   };


document.onkeydown = function(e) {
switch (e.keyCode) {
  case 38:
    newGame.player.moveUp();
    break;
  case 40:
    newGame.player.moveDown();
    break;
  case 37:
    newGame.player.moveLeft();
    break;
  case 39:
    newGame.player.moveRight();
    break;
}

};


/* document.onkeyup = function(e) {
  stopMove();
};

function stopMove() {
    player.vX = 0;
    player.vY = 0;
};
*/
