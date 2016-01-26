function bankAccount(memberName,initialDeposit) {
	this.memberName = memberName;
	this.initialDeposit = initialDeposit;
}

bankAccount.prototype.depositWithdraw = function(deposit, withdraw) {
	this.initialDeposit = this.initialDeposit + deposit - withdraw;
}

$(document).ready(function() {
	var newAccount;
	$("form#new-account").submit(function(event) {
		var userName = $("input#new-user-name").val();
		var initialBalance = parseInt($("input#initial-balance").val());
		newAccount = new bankAccount(userName, initialBalance);
		$("span.balance").text(newAccount.initialDeposit);
		event.preventDefault();
	});

 $("form#deposit-withdraw").submit(function(event) {
    event.preventDefault();
    var inputtedDeposit;
    if ($("input#deposit").val() == "") {
      inputtedDeposit = 0;
    } else {
      inputtedDeposit = parseInt($("input#deposit").val());
    }
    var inputtedWithdraw;

    if ($("input#withdraw").val() == "") {
      inputtedWithdraw = 0;
    } else {
      inputtedWithdraw = parseInt($("input#withdraw").val());
    }

    newAccount.depositWithdraw(inputtedDeposit, inputtedWithdraw);
    $("span.balance").text(newAccount.initialDeposit);
  });
});



	