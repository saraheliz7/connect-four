describe("horizontalWin", function(){

  describe("returns true when four of the same color in the ", function(){

    it("bottom right of board", function(){
      var board = [
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "red", "red", "red", "red"]
      ];

      var hasWin = horizontalWin(board, "red");
      expect(hasWin).to.be.true;
    });

    it("top right of board", function(){
      var board = [
        ["", "", "", "red", "red", "red", "red"],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""]
      ];

      var hasWin = horizontalWin(board, "red");
      expect(hasWin).to.be.true;
    });

    it("top left of board", function(){
      var board = [
        ["red", "red", "red", "red", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""]
      ];

      var hasWin = horizontalWin(board, "red");
      expect(hasWin).to.be.true;
    });

    it("bottom left of board", function(){
      var board = [
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["red", "red", "red", "red", "", "", ""]
      ];

      var hasWin = horizontalWin(board, "red");
      expect(hasWin).to.be.true;
    });

    it("middle of the board", function(){
      var board = [
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "red", "red", "red", "red", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""]
      ];

      var hasWin = horizontalWin(board, "red");
      expect(hasWin).to.equal(true);
    });

  });

});
