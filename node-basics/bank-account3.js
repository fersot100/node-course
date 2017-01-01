// This program holds a user's bank account information.
var accounts = [];

function createAccount (account) {
	accounts.push(account);
	return acount;
}

function account(balance, userName){
	this.balance = balance;
	this.userName = userName;
};
account.prototype.deposit = function(amount) {
	if(typeof amount === 'number')
	this.balance += amount;
};
account.prototype.withdraw = function(amount) {
	if(typeof amount === 'number')
	this.balance -= amount;
};
account.prototype.getBalance = function() {
	return this.balance
};
function getAccount(username){
	var matchedAccount;
	for (var i = 0; i < accounts.length; i++){
		if(accounts[i].userName === username){
			matchedAccount = accounts[i];
		}
	}
	return matchedAccount;
}



createAccount(new account(100, 'Charles'));
createAccount(new account(12000, 'David'));

