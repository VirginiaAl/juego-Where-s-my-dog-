

var newGame;
var context;


window.onload = function() {
  context=document.getElementById("canvas").getContext("2d");
  console.log("hola");
    newGame= new Game ();
    console.log(newGame);
    //console.log(newGame);
   setInterval(function(){
     newGame.update();
   },60);
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
