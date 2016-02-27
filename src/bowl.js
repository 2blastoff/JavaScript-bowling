function bowl(){
  this.obj = {};
  this.frame = 0;
  this.residual = 10;
}

bowl.prototype.firstBowl = function(firstpins){
  if (this.frame === 10) return ('game over no more frames');
  this.frameCount();
  this.residualReset();
  this.num = firstpins;
  this.residualCountFirst();
  if (this.num > -1 && this.num < 10) {(this.obj[this.frame] = [this.num, ]);}
  if (this.num === 10) {(this.obj[this.frame]= [this.num, 'x']);}
};

bowl.prototype.secondBowl = function(secondpins){
  this.num2 = secondpins;
  if (this.residualCountSecond()) return ('no second bowl after strike');
  if (this.residual - this.num2 === 0) { this.obj[this.frame].push('/'); }
  if (this.residual - this.num2 > 0) { this.obj[this.frame].push(this.num2); }
};

bowl.prototype.frameCount = function(){
  if (this.frame < 10) { this.frame += 1; }
};

bowl.prototype.residualCountFirst = function(){
    this.residual -=  this.num;
};

bowl.prototype.residualCountSecond = function(){
  return (this.residual === 0) ? true : false;
};

bowl.prototype.residualReset = function(){
  this.residual = 10;
};


// private
bowl.prototype._firstPinsKnockedDown = function(){
  return Math.floor(Math.random() * 11);
};

bowl.prototype._secondPinsKnockedDown = function(){
  return Math.floor(Math.random() * this.residual + 1);
};
