function bowl(){
  this.obj = {};
  this.frame = 0;
  this.residual = 10;
}

bowl.prototype.firstBowl = function(firstpins){
  this.frame += 1;
  this.num = firstpins;
  this.residual -=  this.num;
  // console.log(this.num);
  // console.log(this.residual);
  if (this.num > -1 && this.num < 10) { this.obj[this.frame] = [this.num, ]};
  if (this.num === 10) {this.obj[this.frame]= [this.num, 'x'] };
  // return (this.num > -1 && this.num < 10) ? this.obj[this.frame] = [this.num, ] : this.obj[this.frame]= [this.num, 'x'];
};

bowl.prototype.secondBowl = function(secondpins){
  // if (this.residual === 0) return 'zero pins no second ball';
  console.log(this.residual);
  this.num2 = secondpins;
  if (this.residual === 0) { this.obj[this.frame].push('/'); }
  if (this.residual > 0) { this.obj[this.frame].push(this.num2); }
  // return (this.residual === 0) ? this.obj[this.frame].push('/') : this.obj[this.frame].push(this.num2);
};





// private
bowl.prototype._firstPinsKnockedDown = function(){
  return Math.floor(Math.random() * 11);
};

bowl.prototype._secondPinsKnockedDown = function(){
  return Math.floor(Math.random() * this.residual);
};
