var count = 0;
var gameOver = false;


var move = function(row, column, board) {
  if(gameOver === false) {
    setCellColor(board, column);
    drawBoard(board);
  }
};

window.onload = function(){
  attachBoardClickHandlers(board, move)
};
