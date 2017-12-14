var count = 0;
var gameOver = false;

var checkForWinner = function(board, view) {
  var player = board.winner();
  if(player) {
    view.showWinner(player);
    gameOver = true;
  }
};



var move = function(row, column, board, view) {
  if(gameOver === false && board.getGrid()[row][column] === "") {
    board.setCellColor(column);
    view.drawBoard(board);
    checkForWinner(board, view);
  }
};

var newGame = function(boardView, board) {
  boardView.clearWinner();
  board.clearBoard();
  boardView.drawBoard(board);
  gameOver = false;
};
