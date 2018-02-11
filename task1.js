var math = (function () {

function factorial(num){ 
    res = 1;

    for(var i=1; i<=num; i++)
        res *= i;
    return res;
};

function pow(x, n) {
  if (n != 1) {
    return x * pow(x, n - 1);
  } else {
    return x;
  }
};

function primorial(primeNum){
	answer = 1;

		for(var i = 2; i < primeNum + 1; i++){

			var simple = true;
			for(var j = 2; j < i; j++){
				if(i % j == 0) simple = false;
			}
				if(simple) answer *= i;
		}
		return answer;
};

return {
	factN: factorial,
	powN: pow,
	primeN: primorial
}

})();

alert(math.factN(4));
alert(math.powN(4, 2));
alert(math.primeN(12));
