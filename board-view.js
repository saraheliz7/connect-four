var BoardView = function(){
  var self = this;

  var showCellColor = function(row, column, color) {
    var cell = document.querySelector(".cell-" + row + "-" + column);
    if(color === "red") {
      cell.querySelector(".red").classList.remove("hidden-red");
    } else if (color === "yellow") {
      cell.querySelector(".yellow").classList.remove("hidden-yellow");
    }
  };

  this.drawBoard = function(board){
    for(var row = 0; row < board.getGrid().length; row++) {
      for(var column = 0; column < board.getGrid()[row].length; column++) {
        showCellColor(row, column, board.getGrid()[row][column]);
      }
    }
  };

  this.showWinner = function(player){
    var winnerMessage = document.querySelector(".winner-message");
    winnerMessage.textContent = player + " wins!";
    document.querySelector(".game-over").classList.remove("hidden");
  }

  var attachCellClickHandler = function(row, column, board, callback) {
    var cell = document.querySelector(".cell-" + row + "-" + column);
    cell.addEventListener("click", function() {
      callback(row, column, board, self);
    });
  };

  this.attachBoardClickHandlers = function(board, callback) {
    for(var row = 0; row < 1; row++) {
      for(var column = 0; column < board.getGrid()[row].length; column++) {
        attachCellClickHandler(row, column, board, callback)
      }
    }
  };

};
