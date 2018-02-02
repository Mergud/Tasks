console.log("Task 2");

function sum(a) {
	var counter = a;

	function action(b) {
		counter += b;
		return action;
	}

	action.valueOf = function() {
		return counter;
	}
	return action;
}

console.log( sum(1)(2) );
console.log( sum(5)(-1)(2) );
console.log( sum(6)(-1)(-2)(-3) );
console.log( sum(0)(1)(2)(3)(4)(5) );
