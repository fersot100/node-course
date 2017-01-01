var person = {
	name: 'Andrew',
	age: 24
};
var personJSON = JSON.stringify(person); // Stringify converts an object to a JSON string

console.log(personJSON);
console.log(typeof personJSON);

var personObject = JSON.parse(personJSON); //Parse converts JSON to a JS object

console.log(personObject.name);
console.log(typeof personObject);

console.log('Challenge Area');

var animal = '{"name": "Halley"}';

animal = JSON.parse(animal);

animal.age = 12;

console.log(animal.name);
console.log(typeof animal);

animal = JSON.stringify(animal);

console.log(animal);
console.log(typeof animal);