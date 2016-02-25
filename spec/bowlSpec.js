describe ('bowl', function(){

beforeEach (function() {
  bowl1 = new bowl();
  num = bowl1.pinsKnockedDown();
});

describe("#pinsKnockedDown", function(){
  it ('creates pin knockdown number inclusive 0 to 10', function() {
    expect(bowl1.pinsKnockedDown()).toBeGreaterThan(-1);
    expect(bowl1.pinsKnockedDown()).not.toBeGreaterThan(10);
  });
  });

describe("#firstBowl", function (){
  it ('pushes [0-9, ] or [10, x] for strike to hash', function(){
    bowl1.firstBowl(num);
    if (num > -1 && num < 10)
    console.log(num);
    expect(bowl1.arr).toEqual({[bowl1.frame]:[num, ]});
    if (num === 10)
    expect(bowl1.arr).toEqual({[bowl1.frame]:[10, 'x']});
    console.log(bowl1.arr);
  });
  });

describe('#secondBowl', function(){
  it('returns pins knocked down or spare', function(){
    if (num > -1 && num < 10)
    expect(bowl1.secondBowl(num)).toBeGreaterThan(-1);
    expect(bowl1.secondBowl(num)).not.toBeGreaterThan(10);
    if (num === 10)
      expect(bowl1.secondBowl(num)).toEqual('/');
  });
  });





});
