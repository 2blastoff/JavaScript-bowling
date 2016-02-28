
var bowl1, num1, diff;

describe ('bowl', function(){

beforeEach (function() {
  bowl1 = new bowl();
  x = 2;
  y = 3;
  z = 8;
  str = 10;
});

  describe("#_firstPinsKnockedDown", function(){
    it ('creates pin knockdown number inclusive 0 to 10', function() {
      expect(bowl1._firstPinsKnockedDown()).toBeGreaterThan(-1);
      expect(bowl1._firstPinsKnockedDown()).not.toBeGreaterThan(10);
    });
  });

  describe('#_secondPinsKnockedDown', function(){
    it('creates pin knockdown number inclusive 0 to residual pins', function(){
      residual = 10 - bowl1._firstPinsKnockedDown;
      expect(bowl1._secondPinsKnockedDown()).toBeGreaterThan(-1);
      expect(bowl1._secondPinsKnockedDown()).not.toBeGreaterThan(residual);
    });
  });

  describe("#firstBowl", function (){
    it ('pushes 0-9 pin number to obj and creates frame number', function(){
      bowl1.firstBowl(x);
      expect(bowl1.obj[1]).toEqual([x]);
    });
    it ('pushes [10, x] to obj for strike', function(){
      bowl1.firstBowl(str);
      expect(bowl1.obj[1]).toEqual([10, 'x']);
    });
    it('return name', function(){
      bowl1.frame = 10;
      expect(bowl1.firstBowl(x)).toContain('game over no more frames');

    });
  });

  describe('#secondBowl', function(){
    it('push 0-9 pin number to obj at index[1] of frame', function(){
      bowl1.firstBowl(x);
      bowl1.secondBowl(y);
      expect(bowl1.obj[1]).toEqual([x, y]);
    });
    it('pushes "/" to obj for spare at index[1]', function(){
      bowl1.firstBowl(x);
      bowl1.secondBowl(z);
      expect(bowl1.obj[1]).toEqual([x, '/']);
    });
    it('throws a statement "no second bowl after strike"', function(){
      bowl1.firstBowl(str);
      expect(bowl1.secondBowl(x)).toEqual('no second bowl after strike');
    });
  });

  describe('#frameCount', function(){
    it('increases frame number by 1 on each call', function(){
      bowl1.firstBowl(x);
      expect(bowl1.frame).toEqual(1);
    });
  });

  describe('#residualCountFirst', function(){
    it('reduces residual by the pins knocked down in first bowl', function(){
      bowl1.firstBowl(x);
      expect(bowl1.residual).toEqual(8);
    });
  });

  describe('#residualReset', function(){
    it('resets residual (pin count) to 10', function(){
      bowl1.firstBowl(x);
      bowl1.residualReset();
      expect(bowl1.residual).toEqual(10);
    });
  });

});
