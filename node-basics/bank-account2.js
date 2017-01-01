// This program holds a user's bank account information.
var accounts = [];

//Account Object:
	//balance
	//username
//createAccount(account)
//push onto accounts array
//return account
//getAcount
//find matching account using forEach


function account(balance, userName){
	this.balance = balance;
	this.userName = userName;
};
account.prototype.deposit = function(amount) {
	this.balance += amount;
};
account.prototype.withdraw = function(amount) {
	this.balance -= amount;
};
account.prototype.getBalance = function() {
	return this.balance
};
function getAccount(username){
	var matchedAccount;
	accounts.forEach(function (account){
		if(account.userName === username){
			matchedAccount = account;
		}
	});
	return matchedAccount;
}



accounts.push(new account(100, 'Charles'));
accounts.push(new account(12000, 'David'));

