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
  });
});
