describe("Board", function(){
  var board;
  beforeEach(function(){
    board = new Board();
  });
  describe("winner()", function(){
    describe("returns winning color when four of the same color are horizontally in the ", function(){
      it("top right of the board", function(){
        var grid = [
          ["", "", "", "red", "red", "red", "red"],
          ["", "", "", "", "", "", ""],
          ["", "", "", "", "", "", ""],
          ["", "", "", "", "", "", ""],
          ["", "", "", "", "", "", ""],
          ["", "", "", "", "", "", ""]
        ];
        board.setGrid(grid);
        var winningColor = board.winner();
        expect(winningColor).to.equal("red");
      });
      it("bottom right of the board", function(){
        var grid = [
          ["", "", "", "", "", "", ""],
          ["", "", "", "", "", "", ""],
          ["", "", "", "", "", "", ""],
          ["", "", "", "", "", "", ""],
          ["", "", "", "", "", "", ""],
          ["", "", "", "red", "red", "red", "red"]
        ];
        board.setGrid(grid);
        var winningColor = board.winner();
        expect(winningColor).to.equal("red");
      });
      it("top left of the board", function(){
        var grid = [
          ["red", "red", "red", "red", "", "", ""],
          ["", "", "", "", "", "", ""],
          ["", "", "", "", "", "", ""],
          ["", "", "", "", "", "", ""],
          ["", "", "", "", "", "", ""],
          ["", "", "", "", "", "", ""]
        ];
        board.setGrid(grid);
        var winningColor = board.winner();
        expect(winningColor).to.equal("red");
      });
      it("bottom left of the board", function(){
        var grid = [
          ["", "", "", "", "", "", ""],
          ["", "", "", "", "", "", ""],
          ["", "", "", "", "", "", ""],
          ["", "", "", "", "", "", ""],
          ["", "", "", "", "", "", ""],
          ["red", "red", "red", "red", "", "", ""]
        ];
        board.setGrid(grid);
        var winningColor = board.winner();
        expect(winningColor).to.equal("red");
      });
      it("middle of the board", function(){
        var grid = [
          ["", "", "", "", "", "", ""],
          ["", "", "", "", "", "", ""],
          ["", "red", "red", "red", "red", "", ""],
          ["", "", "", "", "", "", ""],
          ["", "", "", "", "", "", ""],
          ["", "", "", "", "", "", ""]
        ];
        board.setGrid(grid);
        var winningColor = board.winner();
        expect(winningColor).to.equal("red");
      });
    });
    it("returns red when there are four reds in a row hoizontally", function(){
      var grid = [
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "red", "red", "red", "red", "", ""],
        ["", "", "", "", "", "", ""]
      ];
      board.setGrid(grid);
      var winningColor = board.winner();
      expect(winningColor).to.equal("red");
    });
    it("returns yellow when there are four yellows in a row horizontally", function(){
      var grid = [
        ["", "", "", "", "", "", ""],
        ["", "", "", "yellow", "yellow", "yellow", "yellow"],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""]
      ];
      board.setGrid(grid);
      var winningColor = board.winner();
      expect(winningColor).to.equal("yellow");
    });
    describe("returns winning color when four of the same color are vertically in the ", function(){
      it("top right of the board", function(){
        var grid = [
          ["", "", "", "", "", "", "red"],
          ["", "", "", "", "", "", "red"],
          ["", "", "", "", "", "", "red"],
          ["", "", "", "", "", "", "red"],
          ["", "", "", "", "", "", ""],
          ["", "", "", "", "", "", ""]
        ];
        board.setGrid(grid);
        var winningColor = board.winner();
        expect(winningColor).to.equal("red");
      });
      it("bottom right of the board", function(){
        var grid = [
          ["", "", "", "", "", "", ""],
          ["", "", "", "", "", "", ""],
          ["", "", "", "", "", "", "red"],
          ["", "", "", "", "", "", "red"],
          ["", "", "", "", "", "", "red"],
          ["", "", "", "", "", "", "red"]
        ];
        board.setGrid(grid);
        var winningColor = board.winner();
        expect(winningColor).to.equal("red");
      });
      it("top left of the board", function(){
        var grid = [
          ["red", "", "", "", "", "", ""],
          ["red", "", "", "", "", "", ""],
          ["red", "", "", "", "", "", ""],
          ["red", "", "", "", "", "", ""],
          ["", "", "", "", "", "", ""],
          ["", "", "", "", "", "", ""]
        ];
        board.setGrid(grid);
        var winningColor = board.winner();
        expect(winningColor).to.equal("red");
      });
      it("bottom left of the board", function(){
        var grid = [
          ["", "", "", "", "", "", ""],
          ["", "", "", "", "", "", ""],
          ["red", "", "", "", "", "", ""],
          ["red", "", "", "", "", "", ""],
          ["red", "", "", "", "", "", ""],
          ["red", "", "", "", "", "", ""]
        ];
        board.setGrid(grid);
        var winningColor = board.winner();
        expect(winningColor).to.equal("red");
      });
      it("middle of the board", function(){
        var grid = [
          ["", "", "", "", "", "", ""],
          ["", "", "", "red", "", "", ""],
          ["", "", "", "red", "", "", ""],
          ["", "", "", "red", "", "", ""],
          ["", "", "", "red", "", "", ""],
          ["", "", "", "", "", "", ""]
        ];
        board.setGrid(grid);
        var winningColor = board.winner();
        expect(winningColor).to.equal("red");
      });
    });
    it("returns red when there are four reds in a row vertically", function(){
      var grid = [
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "red", ""],
        ["", "", "", "", "", "red", ""],
        ["", "", "", "", "", "red", ""],
        ["", "", "", "", "", "red", ""],
        ["", "", "", "", "", "", ""]
      ];
      board.setGrid(grid);
      var winningColor = board.winner();
      expect(winningColor).to.equal("red");
    });
    it("returns yellow when there are four yellows in a row vertically", function(){
      var grid = [
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "yellow"],
        ["", "", "", "", "", "", "yellow"],
        ["", "", "", "", "", "", "yellow"],
        ["", "", "", "", "", "", "yellow"],
        ["", "", "", "", "", "", ""]
      ];
      board.setGrid(grid);
      var winningColor = board.winner();
      expect(winningColor).to.equal("yellow");
    });
    describe("returns winning color when four of the same color are diagonally in the ", function(){
      it("top left corner of the board", function(){
        var grid = [
          ["red", "", "", "", "", "", ""],
          ["", "red", "", "", "", "", ""],
          ["", "", "red", "", "", "", ""],
          ["", "", "", "red", "", "", ""],
          ["", "", "", "", "", "", ""],
          ["", "", "", "", "", "", ""]
        ];
        board.setGrid(grid);
        var winningColor = board.winner();
        expect(winningColor).to.equal("red");
      });
      it("top left, right corner of the board", function(){
        var grid = [
          ["", "", "", "red", "", "", ""],
          ["", "", "", "", "red", "", ""],
          ["", "", "", "", "", "red", ""],
          ["", "", "", "", "", "", "red"],
          ["", "", "", "", "", "", ""],
          ["", "", "", "", "", "", ""]
        ];
        board.setGrid(grid);
        var winningColor = board.winner();
        expect(winningColor).to.equal("red");
      });
      it("top left, bottom left of the board", function(){
        var grid = [
          ["", "", "", "", "", "", ""],
          ["", "", "", "", "", "", ""],
          ["red", "", "", "", "", "", ""],
          ["", "red", "", "", "", "", ""],
          ["", "", "red", "", "", "", ""],
          ["", "", "", "red", "", "", ""]
        ];
        board.setGrid(grid);
        var winningColor = board.winner();
        expect(winningColor).to.equal("red");
      });
      it("top left, bottom right of the board", function(){
        var grid = [
          ["", "", "", "", "", "", ""],
          ["", "", "", "", "", "", ""],
          ["", "", "", "red", "", "", ""],
          ["", "", "", "", "red", "", ""],
          ["", "", "", "", "", "red", ""],
          ["", "", "", "", "", "", "red"]
        ];
        board.setGrid(grid);
        var winningColor = board.winner();
        expect(winningColor).to.equal("red");
      });
      it("middle of the board", function(){
        var grid = [
          ["", "", "", "", "", "", ""],
          ["", "", "red", "", "", "", ""],
          ["", "", "", "red", "", "", ""],
          ["", "", "", "", "red", "", ""],
          ["", "", "", "", "", "red", ""],
          ["", "", "", "", "", "", ""]
        ];
        board.setGrid(grid);
        var winningColor = board.winner();
        expect(winningColor).to.equal("red");
      });
    });
    describe("returns false when three or less of the same color diagonally in the ", function(){
      it("top right of the board from the left", function(){
        var grid = [
          ["", "", "", "", "red", "", ""],
          ["", "", "", "", "", "red", ""],
          ["", "", "", "", "", "", "red"],
          ["", "", "", "", "", "", ""],
          ["", "", "", "", "", "", ""],
          ["", "", "", "", "", "", ""]
        ];
        board.setGrid(grid);
        var winningColor = board.winner();
        expect(winningColor).to.equal(false);
      });
    });
    describe("returns winning color when four of the same color are diagonally in the ", function(){
      it("top right corner of the board", function(){
        var grid = [
          ["", "", "", "", "", "", "red"],
          ["", "", "", "", "", "red", ""],
          ["", "", "", "", "red", "", ""],
          ["", "", "", "red", "", "", ""],
          ["", "", "", "", "", "", ""],
          ["", "", "", "", "", "", ""]
        ];
        board.setGrid(grid);
        var winningColor = board.winner();
        expect(winningColor).to.equal("red");
      });
      it("top right, left corner of the board", function(){
        var grid = [
          ["", "", "", "red", "", "", ""],
          ["", "", "red", "", "", "", ""],
          ["", "red", "", "", "", "", ""],
          ["red", "", "", "", "", "", ""],
          ["", "", "", "", "", "", ""],
          ["", "", "", "", "", "", ""]
        ];
        board.setGrid(grid);
        var winningColor = board.winner();
        expect(winningColor).to.equal("red");
      });
      it("top right, bottom right corner of the board", function(){
        var grid = [
          ["", "", "", "", "", "", ""],
          ["", "", "", "", "", "", ""],
          ["", "", "", "", "", "", "red"],
          ["", "", "", "", "", "red", ""],
          ["", "", "", "", "red", "", ""],
          ["", "", "", "red", "", "", ""]
        ];
        board.setGrid(grid);
        var winningColor = board.winner();
        expect(winningColor).to.equal("red");
      });
      it("top right, bottom left corner of the board", function(){
        var grid = [
          ["", "", "", "", "", "", ""],
          ["", "", "", "", "", "", ""],
          ["", "", "", "red", "", "", ""],
          ["", "", "red", "", "", "", ""],
          ["", "red", "", "", "", "", ""],
          ["red", "", "", "", "", "", ""]
        ];
        board.setGrid(grid);
        var winningColor = board.winner();
        expect(winningColor).to.equal("red");
      });
      it("middle of the board", function(){
        var grid = [
          ["", "", "", "", "", "", ""],
          ["", "", "", "", "red", "", ""],
          ["", "", "", "red", "", "", ""],
          ["", "", "red", "", "", "", ""],
          ["", "red", "", "", "", "", ""],
          ["", "", "", "", "", "", ""]
        ];
        board.setGrid(grid);
        var winningColor = board.winner();
        expect(winningColor).to.equal("red");
      });
    });
    describe("returns false when three or less of the same color are diagonlly in the ", function(){
      it("bottom right of the board from the right", function(){
        var grid = [
          ["", "", "", "", "", "", ""],
          ["", "", "", "", "", "", ""],
          ["", "", "", "", "", "", ""],
          ["", "", "", "", "", "", "red"],
          ["", "", "", "", "", "red", ""],
          ["", "", "", "", "red", "", ""]
        ];
        board.setGrid(grid);
        var winningColor = board.winner();
        expect(winningColor).to.equal(false);
      });
    });
    describe("returns false when", function(){
      it("there is four in a row horizontally between two rows", function(){
        var grid = [
          ["", "", "", "", "", "", ""],
          ["", "", "", "", "", "", ""],
          ["", "", "", "", "", "", ""],
          ["", "", "", "", "", "", "red"],
          ["red", "red", "red", "", "", "", ""],
          ["", "", "", "", "", "", ""]
        ];
        board.setGrid(grid);
        var winningColor = board.winner();
        expect(winningColor).to.equal(false);
      });
      it("there are no players on the board", function(){
        var grid = [
          ["", "", "", "", "", "", ""],
          ["", "", "", "", "", "", ""],
          ["", "", "", "", "", "", ""],
          ["", "", "", "", "", "", ""],
          ["", "", "", "", "", "", ""],
          ["", "", "", "", "", "", ""]
        ];
        board.setGrid(grid);
        var winningColor = board.winner();
        expect(winningColor).to.equal(false);
      });
      it("there is four in a row vertically between two columns", function(){
        var grid = [
          ["", "red", "", "", "", "", ""],
          ["", "", "", "", "", "", ""],
          ["", "", "", "", "", "", ""],
          ["red", "", "", "", "", "", ""],
          ["red", "", "", "", "", "", ""],
          ["red", "", "", "", "", "", ""]
        ];
        board.setGrid(grid);
        var winningColor = board.winner();
        expect(winningColor).to.equal(false);
      });
    });
  });
  describe("clearBoard()", function(){
    it("clears the board of all players", function(){
      var grid = [
        ["", "", "", "", "", "", "red"],
        ["", "", "", "", "", "red", ""],
        ["", "", "", "", "red", "", ""],
        ["", "", "", "red", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""]
      ];
      board.setGrid(grid);
      board.clearBoard();
      var cleared = board.getGrid();
      expect(cleared).to.deep.equal([
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""]
      ]);
    });
  });

});
