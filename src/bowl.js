function bowl(){
  this.arr = {};
  this.frame = 0;
}

bowl.prototype.firstBowl = function(pins){
  this.frame += 1;
  var num = pins;
  if (num > -1 && num < 10) this.arr[this.frame]= [num, ];   //this.arr.push([num, ]);
  if (num === 10) this.arr[this.frame]= [num, 'x'];
};

bowl.prototype.secondBowl = function(pins){
  var num = pins;
  if (num > -1 && num < 10) this.arr[this.frame].push(num);
  if (num === 10) return('/');
};

bowl.prototype.pinsKnockedDown = function(){
  return Math.floor(Math.random() * 11);
};
