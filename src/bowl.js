function bowl(){
  this.obj = {};
  this.frame = 0;
  this.bowl = 0;
  this.residual = 10;
}

bowl.prototype.firstBowl = function(firstpins){
  this.frame += 1;
  this.num = firstpins;
  this.residual -=  this.num;
  if (this.num > -1 && this.num < 10) { (this.obj[this.frame] = [this.num, ]); }
  if (this.num === 10) { (this.obj[this.frame]= [this.num, 'x']); }
};

bowl.prototype.secondBowl = function(secondpins){
  if (this.residual === 0) {
  this.residual = 10;
  return ('no second bowl');}
  this.num2 = secondpins;
  if (this.residual - this.num2 === 0) { this.obj[this.frame].push('/'); }
  if (this.residual - this.num2 > 0) { this.obj[this.frame].push(this.num2); }
  this.residual = 10;
};


// private
bowl.prototype._firstPinsKnockedDown = function(){
  return Math.floor(Math.random() * 11);
};

bowl.prototype._secondPinsKnockedDown = function(){
  // var the = this.residual;
  return Math.floor(Math.random() * this.residual + 1);
};
