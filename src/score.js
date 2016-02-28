function score(){
}

score.prototype.frameScore = function(obj){
  var frameScores = [];
  for(var i = 1; i <= Object.keys(obj).length; i++){
    var cube = obj[i][0] + obj[i][1];
    frameScores.push(cube);
  }

  var be = [];
  // n = 0;
    for (var x = 0; x <= 5; x++){
      var the = (frameScores[x] + be[x-1]);
        be.push(the);
        // n += 1;
}
  console.log(be);

};
