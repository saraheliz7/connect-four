var board = [
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""]
];

var count = 0;
var gameOver = false;


var showCellColor = function(row, column, color) {
  var cell = document.querySelector(".cell-" + row + "-" + column);
  if(color === "red") {
    cell.querySelector(".red").classList.remove("hidden-red");
  } else if (color === "yellow") {
    cell.querySelector(".yellow").classList.remove("hidden-yellow");
  }
};

var drawBoard = function(board){
  for(var row = 0; row < board.length; row++) {
    for(var column = 0; column < board[row].length; column++) {
      showCellColor(row, column, board[row][column]);
    }
  }
};

var attachCellClickHandler = function(row, column, board, callback) {
  var cell = document.querySelector(".cell-" + row + "-" + column);
  cell.addEventListener("click", function() {
    callback(row, column, board);
  });
};

var attachBoardClickHandlers = function(board, callback) {
  for(var row = 0; row < 1; row++) {
    for(var column = 0; column < board[row].length; column++) {
      attachCellClickHandler(row, column, board, callback)
    }
  }
}


var setCellColor = function(board, column) {
  for(var row = board.length -1; row >= 0; row--) {
    if(board[row][column] === "") {
      if(count % 2 === 0) {
        board[row][column] = "red";
      } else {
        board[row][column] = "yellow";
      }
      count++;
      return;
    }
  }
};



var move = function(row, column, board) {
  if(gameOver === false) {
    setCellColor(board, column);
    drawBoard(board);
  }
};

window.onload = function(){
  attachBoardClickHandlers(board, move)
};
