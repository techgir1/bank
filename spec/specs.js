describe('bankAccount', function() {
	it("sets up account", function() {
		var testBankAccount = new bankAccount("Beth Foster",100.50);
		expect(testBankAccount.memberName).to.equal("Beth Foster");
		expect(testBankAccount.initialDeposit).to.equal(100.50);
	});

});