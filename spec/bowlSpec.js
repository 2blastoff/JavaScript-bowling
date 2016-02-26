
var bowl1, num1, diff;

describe ('bowl', function(){

beforeEach (function() {
  bowl1 = new bowl();
  num1 = bowl1._firstPinsKnockedDown();
  num2 = bowl1._secondPinsKnockedDown();
  diff = 10 - num1;
});

describe("#_firstPinsKnockedDown", function(){
  it ('creates pin knockdown number inclusive 0 to 10', function() {
    expect(bowl1._firstPinsKnockedDown()).toBeGreaterThan(-1);
    expect(bowl1._firstPinsKnockedDown()).not.toBeGreaterThan(10);
  });
  });

describe("#firstBowl", function (){
  it ('pushes 0-9 to hash at index 0', function(){
    // num = 2;
    bowl1.firstBowl(num1);
      expect(bowl1.obj).toEqual({[bowl1.frame]:[num, ]});
    // });
    // it ('pushes [10, x] to hash for strike', function(){
      // str = 10;
      bowl1.firstBowl(num1);
        expect(bowl1.obj).toEqual({[bowl1.frame]:[10, 'x']});
      });
  });
  });

describe('#secondBowl', function(){
  it('pushes 0-9 or spare(/) to hash at index 1 in obj', function(){
//     // num2 = bowl1._secondPinsKnockedDown();
    // num = 7;
    // num1 = 2;
    bowl1.firstBowl(num1);
    bowl1.secondBowl(num2);
//     if (diff - num2 === 0)
    expect(bowl1.obj).toEqual({[bowl1.frame]:[num1, num2]});
//     if (diff - num2 > 0)
//     expect(bowl1.obj).toEqual({[bowl1.frame]:[num1, num2]});
  });
  // });

});
