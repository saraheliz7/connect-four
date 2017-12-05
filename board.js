var board = [
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""]
];


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

var horizontalWin = function(board, player) {
  var winner = 0;
  for(var row = 0; row < board.length; row++) {
    for(var column = 0; column < board[row].length; column++) {
      if(board[row][column] === player) {
        winner++;
        if(winner === 4) {
          return true;
        }
      } else {
        winner = 0;
      }
    }
  }
};
