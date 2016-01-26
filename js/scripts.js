function bankAccount(memberName,initialDeposit) {
	this.memberName = memberName;
	this.initialDeposit = initialDeposit;
}

bankAccount.prototype.depositWithdraw = function(deposit, withdraw) {
	this.initialDeposit = this.initialDeposit + deposit - withdraw;
}