// This program holds a user's bank account information.

var account = {
	balance: 0
};
//deposit
function deposit(account, amount){
	account.balance += amount;
}

//withdraw
function withdraw(account, amount){
	account.balance -= amount;
}

//getBalance
function getBalance(account){
	return account.balance
}

deposit(account, 20);
withdraw(account, 10);
console.log('Balance: ' + getBalance(account));