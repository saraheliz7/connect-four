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

  it("returns true when four red spaces filled in a row", function(){
    var board = [
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "red", "red", "red", "red", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""]
    ];

    var hasWin = horizontalWin(board, "red");
    expect(hasWin).to.be.true;
  });
  it("returns true when four yellow spaces filled in a row", function(){
    var board = [
      ["", "", "", "", "", "", ""],
      ["", "yellow", "yellow", "yellow", "yellow", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""]
    ];

    var hasWin = horizontalWin(board, "yellow");
    expect(hasWin).to.be.true;
  });
});

describe("verticalWin", function(){
  describe("returns true when four of the same color in the ", function(){
    it("top left of the board", function(){
      var board = [
        ["red", "", "", "", "", "", ""],
        ["red", "", "", "", "", "", ""],
        ["red", "", "", "", "", "", ""],
        ["red", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""]
      ];
      var hasWin = verticalWin(board, "red");
      expect(hasWin).to.be.true;
    });
    it("bottom left of the board", function(){
      var board = [
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["red", "", "", "", "", "", ""],
        ["red", "", "", "", "", "", ""],
        ["red", "", "", "", "", "", ""],
        ["red", "", "", "", "", "", ""]
      ];
      var hasWin = verticalWin(board, "red");
      expect(hasWin).to.be.true;
    });
    it("top right of the board", function(){
      var board = [
        ["", "", "", "", "", "", "red"],
        ["", "", "", "", "", "", "red"],
        ["", "", "", "", "", "", "red"],
        ["", "", "", "", "", "", "red"],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""]
      ];
      var hasWin = verticalWin(board, "red");
      expect(hasWin).to.be.true;
    });
    it("bottom right of the board", function(){
      var board = [
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "red"],
        ["", "", "", "", "", "", "red"],
        ["", "", "", "", "", "", "red"],
        ["", "", "", "", "", "", "red"]
      ];
      var hasWin = verticalWin(board, "red");
      expect(hasWin).to.be.true;
    });
    it("middle of the board", function(){
      var board = [
        ["", "", "", "", "", "", ""],
        ["", "", "", "red", "", "", ""],
        ["", "", "", "red", "", "", ""],
        ["", "", "", "red", "", "", ""],
        ["", "", "", "red", "", "", ""],
        ["", "", "", "", "", "", ""]
      ];
      var hasWin = verticalWin(board, "red");
      expect(hasWin).to.be.true;
    });
    it("middle of right hand column of the board", function(){
      var board = [
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "red"],
        ["", "", "", "", "", "", "red"],
        ["", "", "", "", "", "", "red"],
        ["", "", "", "", "", "", "red"],
        ["", "", "", "", "", "", ""]
      ];
      var hasWin = verticalWin(board, "red");
      expect(hasWin).to.be.true;
    });
  });
  it("returns true when four red spaces filled in a column", function(){
    var board = [
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "red"],
      ["", "", "", "", "", "", "red"],
      ["", "", "", "", "", "", "red"],
      ["", "", "", "", "", "", "red"],
      ["", "", "", "", "", "", ""]
    ];
    var hasWin = verticalWin(board, "red");
    expect(hasWin).to.be.true;
  });
  it("returns true when four yellow spaces filled in a column", function(){
    var board = [
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "yellow", "", ""],
      ["", "", "", "", "yellow", "", ""],
      ["", "", "", "", "yellow", "", ""],
      ["", "", "", "", "yellow", "", ""],
      ["", "", "", "", "", "", ""]
    ];
    var hasWin = verticalWin(board, "yellow");
    expect(hasWin).to.be.true;
  });
});

describe("hasWin", function(){
  it("returns true when horizontalWin is true", function(){
    var board = [
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "red", "red", "red", "red"]
    ];

    var hasHorizontalWin = hasWin(board, "red");
    expect(hasHorizontalWin).to.be.true;
  });
  it("returns true when verticalWin is true", function(){
    var board = [
      ["", "red", "", "", "", "", ""],
      ["", "red", "", "", "", "", ""],
      ["", "red", "", "", "", "", ""],
      ["", "red", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""]
    ];

    var hasVerticalWin = hasWin(board, "red");
    expect(hasVerticalWin).to.be.true;
  });
});
