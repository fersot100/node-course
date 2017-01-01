var name = undefined;


if (typeof x === 'undefined'){
	console.log('Name is undefined');
}

function greetUser (name){
	if (typeof name === 'undefined'){
		console.log('Hello World');
	}
	else{
		console.log('Hello ' + name + '!');
	} 
}

greetUser('Andrew');
greetUser();