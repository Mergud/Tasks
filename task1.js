(function(){

	function factorial(num){ 
    res = 1;

    for(var i=1; i<=num; i++)
        res *= i;
    console.log("The factorial of a number " + num + " equals " + res);
};


function pow(a, n){

	result = Math.pow(a, n);

	console.log("Initial number " + a + ", his pow " + n + ", equals " + result);
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
	console.log("Number: " + primeNum + " and his primorial " + answer);
};

factorial(4);
pow(4, 2);
primorial(12);

})();
