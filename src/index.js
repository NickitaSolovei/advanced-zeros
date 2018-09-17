module.exports = function getZerosCount(number, base) {
  var maxSimpleNum = base;
  var ins = 1;
  var ins2 = 1;

  function fff(simpleNum) {
    var maxSimpleNum22 = simpleNum;
    for (var i = 2; i <= simpleNum/2 ; i++){
      var ostatok = simpleNum % i;
      if (ostatok === 0){

        maxSimpleNum22 = i;
      }
    }
    if (simpleNum !== maxSimpleNum22){
      maxSimpleNum = maxSimpleNum22;
      ins++;
      fff(maxSimpleNum);
    }
  }
  fff(maxSimpleNum);
  // your implementation
  var answer1 = 0;

  function divide5(n){
    var newN = n / maxSimpleNum;
    if (newN >= 1){
      newN = Math.floor(newN);
      answer1 += newN;
      divide5(newN);
    }
  }
  divide5(number);

  var k1 = 1;
  function SearchK1(x){
    if (x % (maxSimpleNum * maxSimpleNum) === 0) {
      k1++;
      var x2 = x / maxSimpleNum;
      SearchK1(x2);
    };
  }

  SearchK1(base);

    answer1 = Math.floor(answer1 / k1);
  

  return answer1;
}