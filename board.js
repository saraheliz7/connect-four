var Board = function(){
  var grid = [
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""]
  ];

  this.getGrid = function(){
    return grid;
  };

  this.setGrid = function(newGrid){
    grid = newGrid;
  };

  this.setCellColor = function(column) {
    for(var row = grid.length -1; row >= 0; row--) {
      if(grid[row][column] === "") {
        if(count % 2 === 0) {
          grid[row][column] = "red";
        } else {
          grid[row][column] = "yellow";
        }
        count++;
        return;
      }
    }
  };

  var horizontalWin = function(player) {
    for(var row = 0; row < grid.length; row++) {
      var winner = 0;
      for(var column = 0; column < grid[row].length; column++) {
        if(grid[row][column] === player) {
          winner++;
          if(winner === 4) {
            return true;
          }
        } else {
          winner = 0;
        }
      }
    }
    return false;
  };

  var verticalWin = function(player) {
    for(var column = 0; column < grid[0].length; column++) {
      var winner = 0;
      for(var row = 0; row < grid.length; row++) {
        if(grid[row][column] === player) {
          winner ++;
          if(winner === 4) {
            return true;
          }
        } else {
          winner = 0;
        }
      }
    }
    return false;
  };

  var diagonalLeftWin = function(player) {
    for(var row = 0; row <= grid.length - 4; row++) {
      for(var column = 0; column < grid[row].length; column++) {
        if(grid[row][column] === player
        && grid[row + 1][column + 1] === player
        && grid[row + 2][column + 2] === player
        && grid[row + 3][column + 3] === player) {
          return true;
        }
      }
    }
  };

  var diagonalRightWin = function(player) {
    for(var row = 0; row <= grid.length - 4; row ++) {
      for(var column = 6; column >= 0; column--) {
        if(grid[row][column] === player
        && grid[row + 1][column - 1] === player
        && grid[row + 2][column - 2] === player
        && grid[row + 3][column - 3] === player) {
          return true;
        }
      }
    }
  };


  var hasWin = function(player){
    return horizontalWin(player) || verticalWin(player) || diagonalLeftWin(player)
    || diagonalRightWin(player);
  };

  this.winner = function() {
    if(hasWin("red")) {
      return "red";
    } else if(hasWin("yellow")) {
      return "yellow";
    } else {
      return false;
    }
  };

  this.clearBoard = function() {
    grid = [
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""]
    ];
  };

};
