
function CreateAccountFormDOMManipulator(dom){

	this.getNewAccountValues = function(){
		var values = {};
		values.username = dom.newUsernameInput.val();
		values.password1 = dom.newPasswordInput.val();
		values.password2 = dom.newPassword2Input.val();
		return values;
	};


	this.showAccountCreationUnsuccessful = function(){
		rr.unCollapse(dom.accountCreationUnsuccessful);
	};

}
