console.log('Starting Password Manager');
var storage = require('node-persist'); // Stores module
var crypto = require('crypto-js'); // Stores crpyto 
storage.initSync(); // Gets computer ready to save variables
var argv = require('yargs') // sets the possible commands for argv
	.command('create', 'creates a new account', function (yargs) {
		yargs.options({
			name: {
				demand: true,
				alias: 'n',
				description: 'The name of the account.',
				type: 'string'
			},
			username: {
				demand: true,
				alias: 'u',
				description: 'The username associated with the account.',
				type: 'string'
			},
			password: {
				demand: true,
				alias: 'p',
				description: 'The password associated with the account.',
				type: 'string'
			},
			masterPassword: {
				demand: true,
				alias: 'm',
				description: 'The master password',
				type: 'string'
			}
		}).help('help');
	})
	.command('get', 'Gets an account\'s details', function(yargs){
		yargs.options({
			masterPassword: {
				demand: true,
				alias: 'm',
				description: 'The master password',
				type: 'string'
			}
		}).help('help');
	})
	.command('list', 'Lists all account names', function(yargs){
		yargs.options({
			masterPassword: {
				demand: true,
				alias: 'm',
				description: 'The master password',
				type: 'string'
			}
		}).help('help');
	})
	.command('delete', 'Deletes one or more accounts in storage', function(yargs){
		yargs.options({
			all: {
				demand: false, 
				alias: 'a',
				description: 'Deletes everything in storage.',
				type: 'string'
			},
			masterPassword: {
				demand: true,
				alias: 'm',
				description: 'The master password',
				type: 'string'
			}
		}).help('help');
	})
	.argv; 
function getAccounts (masterPassword){
	//use getItemSync to fetch accounts
	var encryptedAccounts = storage.getItemSync('accounts');
	var accounts = [];
	//decrypt
	if(typeof encryptedAccounts !== 'undefined'){
		var bytes = crypto.AES.decrypt(encryptedAccounts, masterPassword);
		accounts = JSON.parse(bytes.toString(crypto.enc.Utf8));
	}
	//return accounts array
	return accounts;

}
function saveAccounts (accounts, masterPassword){
	//encrypt accounts
	var encryptedAccounts = crypto.AES.encrypt(JSON.stringify(accounts), masterPassword);
	//setItemSync
	storage.setItemSync('accounts', encryptedAccounts.toString());
	return accounts;
}

function account (name, username, password) { //Account Constructor
	this.name = name;
	this.username = username;
	this.password = password;
};
function createAccount(name, username, password, masterPassword) {
	var accounts = getAccounts(masterPassword);
	var tempAccount = new account(name, username, password);
	accounts.push(tempAccount);
	saveAccounts(accounts, masterPassword);
	if (typeof tempAccount != 'undefined') {console.log('Account succesfully created.');}
}
function getAccount(name , masterPassword){
	var accounts = getAccounts(masterPassword);
	var tempAccount;
	for (var i = 0; i < accounts.length; i++){
		if(accounts[i].name === name){
			tempAccount = accounts[i];
		}
	}
	if (typeof tempAccount !== 'undefined'){
		console.log('	Account: ' + tempAccount.name);
		console.log('	Username: ' + tempAccount.username);
		console.log('	Password: ' + tempAccount.password);
	}
	else {
		console.log('No account matching ' + name);
	}
}
function listAccounts(masterPassword){
	var accounts = getAccounts(masterPassword);
	if (accounts.length != 0) {
		for (var i = 0; i < accounts.length; i++){
			console.log(accounts[i].name);
		}
	}
	else{
		console.log('There are no accounts in storage');
	}
}
function deleteAccount(name, masterPassword){
	var accounts = getAccounts(masterPassword);
	var success = false;
	if (typeof accounts === 'undefined'){
		accounts = [];
	}
	for(var i = 0; i < accounts.length; i++){
		if(accounts[i].name === name){
			accounts.splice(i,i+1);
			success = true;
		}
	}
	if (success){
		saveAccounts(accounts, masterPassword);
		console.log("Succesfully deleted " + name);
	}
	else{
		console.log("Could not delete " + name);
	}
}
//Program Logic Controller 
if (argv._[0] === 'create'){
	try{	
		createAccount(argv.name, argv.username, argv.password, argv.masterPassword);
	}
	catch(e){
		console.log('Unable to create account');
		console.log(e.message);
	}
}
else if (argv._[0] === 'get'){
	
	try{	
		getAccount(argv._[1],argv.masterPassword);
	}
	catch(e){
		console.log('Unable to fetch account');
		console.log(e.message);
	}
}
else if (argv._[0] === 'list'){
	
	try{	
		listAccounts(argv.masterPassword);
	}
	catch(e){
		console.log('Unable to list accounts');
		console.log(e.message);
	}
}
else if (argv._[0] === 'delete' && argv._.length > 1){
	
	try{	
		for(var i = 1; i < argv._.length; i++){
		deleteAccount(argv._[i], argv.masterPassword);
		}
	}
	catch(e){
		console.log('Error deleting accounts. Current active accounts are:');
		listAccounts(argv.masterPassword);
	}
}



