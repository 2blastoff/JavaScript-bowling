describe ('score', function(){

beforeEach (function() {
  score1 = new score();
  obj = {1:[3,4], 2:[2,8], 3:[3,4], 4:[1,0], 5:[2,5]};

});

  describe('#frameScore', function(){
    it('returns the frame score when no strike or spare', function(){
      expect(score1.frameScore(obj)).toEqual([7,10,7,1,7]);
    });
  });

  // describe('checks for spare or strike', function(){
  //   it('checks for x or / in frame', function(){
  //
  //     // expect(score1.isSpareOrStrike();)
  //
  //   });

  // });





});
