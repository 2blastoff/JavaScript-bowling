describe ('score', function(){

beforeEach (function() {
  obj = {1:[3,4], 2:[2,8], 3:[3,4], 4:[1,0], 5:[2,5]};
  score1 = new score(obj);
});

  describe('#makeMultiArray', function(){
    it('sequencially sums frames when no strike or spare', function(){
      expect(score1.newScore).toEqual([7,17,24,25,32]);
    });
  });

  // describe('#isSpareOrStrike checks for spare or strike', function(){
  //   it('checks for x or / in frame', function(){
  //
  //     expect(score1.isSpareOrStrike(obj));
  //   });
  // });



});
