console.log("Task 1");
console.log("Factorial");

var res;

(function factorial(num){
    num = parseInt(prompt("Enter your number: ")); 
    res = 1;

    for(var i=1; i<=num; i++)
        res *= i;
    console.log("The factorial of a number " + num + " equals " + res);
}());

console.log("Pow");

(function pow(a, n){
	a = parseInt(prompt("Enter number: "));
	n = parseInt(prompt("Enter pow: "));

	res = Math.pow(a, n);

	console.log("Your answer: " + res);
}());

console.log("Primorial");

(function primorial(primeNum){
	primeNum = parseInt(prompt("Enter number: "));
	res = 1;

		for(var i = 2; i < primeNum + 1; i++){

			var simple = true;
			for(var j = 2; j < i; j++){
				if(i % j == 0) simple = false;
			}
				if(simple) res *= i;
		}
	console.log("Answer: " + res);
}());