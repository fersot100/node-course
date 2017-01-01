var crypto = require('crypto-js');
function encrypt(message, key){
	if(typeof message === 'object'){
		message = JSON.stringify(message);
	}
	return crypto.AES.encrypt(message, key);
}
function decrypt(message, key) {
	var bytes = crypto.AES.decrypt(message, key);
	return bytes.toString(crypto.enc.Utf8);
}

var secretMessage = {
	name: 'Andrew',
	secretName: '007'
}
var secretKey = '123abc';
var encryptedMessage = encrypt(secretMessage, secretKey);
var decryptedMessage = decrypt(encryptedMessage, secretKey);

console.log('The encrypted message: ' + encryptedMessage);
console.log('The decrypted message: ' + decryptedMessage);