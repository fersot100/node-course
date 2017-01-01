function createAdder(baseNumber){
	var add = function adder (numberToAdd){
		return baseNumber + numberToAdd;
	};
	return add;
};
var addTen = createAdder(10);
console.log(addTen(2)); // 12
console.log(addTen(0)); // 10

/*
function greetMaker (name){
	function greet() {
		console.log(name);
	}
	return greet;
}

var greetAndrew = greetMaker('Andrew');
greetAndrew();

var greetWorld = greetMaker('World');
greetWorld();
*/