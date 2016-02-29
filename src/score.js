function score(){

  this.newScore=[];
}

score.prototype.frameScore = function(){
  // var frameScores = [];
  // for(var i = 1; i <= Object.keys(obj).length; i++){
  //   var cube = obj[i][0] + obj[i][1];
  //   frameScores.push(cube);
  // }
  // var summate = [0];
  //   for (var x = 0; x < 5; x++){
  //     var the = (frameScores[x] + summate[x]);
  //     summate.push(the);
  // }
      // summate.shift(); console.log( summate);
      console.log(this.summate);
};

score.prototype.makeMultiArray = function(obj){
  // var frameScores = [];
  for(var i = 1; i <= Object.keys(obj).length; i++){
    var cube = obj[i][0] + obj[i][1];
    // frameScores.push(cube);
    this.newScore.push(cube);
  }

score.prototype.makeMultiArray = function(obj){
  // var frameScores = [];
  for(var i = 1; i <= Object.keys(obj).length; i++){
    var cube = obj[i][0] + obj[i][1];
    // frameScores.push(cube);
    this.newScore.push(cube);
  }

  this.summate = [0];
    for (var x = 0; x < 5; x++){
      var the = (frameScores[x] + this.summate[x]);
      this.summate.push(the);
  }
      this.summate.shift(); return(this.summate);

};
