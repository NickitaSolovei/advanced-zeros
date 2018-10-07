module.exports = function getZerosCount(number, base) {
  let maxSimpleNum = base;
  let ins = 1;
  
  function getMaxSimpleNum(simpleNum) {
    let maxSimpleNumFun = simpleNum;
    for (let i = 2; i <= simpleNum/2 ; i++){
      let balance = simpleNum % i;
      if (balance === 0){
        maxSimpleNumFun = i;
      }
    }
    if (simpleNum !== maxSimpleNumFun){
      maxSimpleNum = maxSimpleNumFun;
      ins++;
      getMaxSimpleNum(maxSimpleNum);
    }
  }
  getMaxSimpleNum(maxSimpleNum);
  let answer = 0;
  
  function divideBase(n){
    let newN = n / maxSimpleNum;
    if (newN >= 1){
      newN = Math.floor(newN);
      answer += newN;
      divideBase(newN);
    }
  }
  divideBase(number);
  
  let k1 = 1;
  function SearchK1(x){
    if (x % (maxSimpleNum * maxSimpleNum) === 0) {
      k1++;
      let x2 = x / maxSimpleNum;
      SearchK1(x2);
    };
  }
  SearchK1(base);
  answer = Math.floor(answer / k1);

  let answer2 = answer;
  k1 = 1;
  maxSimpleNum = 2;
  answer = 0;
  divideBase(number);
  SearchK1(base);
  answer = Math.floor(answer / k1);
  if (answer > answer2) return answer2
  else return answer; 
}