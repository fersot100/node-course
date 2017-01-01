var person = {
	gender: "Attack Helicopter"
};
var fNameProp = "firstName";

person[fNameProp] = 'Andrew';
person.lastName	= 'Mead';
person.age = 24;

delete person.age;

console.log(person);
function greetUser (person){
	console.log('Hello ' + person.firstName + ' ' + person['lastName']);
}
greetUser(person);
//Bracket notation can be used with a variable name when the data member name
//is unknown