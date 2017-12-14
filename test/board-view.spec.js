describe("BoardView", function(){
  describe("ShowWinner()", function(){
    it("shows a message with the winner", function(){

      var mockWinnerMessage = {
        textContent: null
      };
      var mockGameOverContainer = {
        classList: {
          remove: sinon.stub()
        }
      };
      var mockDocument = {
        querySelector: sinon.stub()
      };


      mockDocument.querySelector.withArgs(".winner-message").returns(mockWinnerMessage);
      mockDocument.querySelector.withArgs(".game-over").returns(mockGameOverContainer);
      var boardView = new BoardView(mockDocument);

      boardView.showWinner("yellow");
      var removedClass = mockGameOverContainer.classList.remove.firstCall.args[0];

      expect(mockWinnerMessage.textContent).to.equal("yellow wins!");
      expect(removedClass).to.equal("hidden");
    });
  });
});
