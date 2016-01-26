describe('bankAccount', function() {
	it("sets up account", function() {
		var testBankAccount = new bankAccount("Beth Foster",100.50);
		expect(testBankAccount.memberName).to.equal("Beth Foster");
		expect(testBankAccount.initialDeposit).to.equal(100.50);
	});
});

describe('deposit', function() {
	it("adds virtual money into customer's account", function() {
		var testBankAccount = new bankAccount("Beth Foster", 100.50);
		testBankAccount.depositWithdraw(50.00, 0);
		expect(testBankAccount.initialDeposit).to.equal(150.50);
	});
});

describe('withdraw', function() {
	it("withdraws money for a customer's account", function() {
		var testBankAccount = new bankAccount("Beth Foster", 100.50);
		testBankAccount.depositWithdraw(0, 50.00);
		expect(testBankAccount.initialDeposit).to.equal(50.50);
	});
});