var isValid = false;
var word = 'true';
var num = 12;

function flipBool(tf){
	if((typeof tf) == "boolean"){
		return !tf;
	}
}

console.log('Before: ' + isValid);
isValid = flipBool(isValid);
num = flipBool(num);
console.log('After: ' + isValid);
console.log('num was 12 and now it\'s ' + num);