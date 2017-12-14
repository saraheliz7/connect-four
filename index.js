window.onload = function(){
  var board = new Board();
  var boardView = new BoardView(document);
  boardView.attachBoardClickHandlers(board, move);
  boardView.attachButtonClickHandler(function() {
    newGame(boardView, board);
  });
};
