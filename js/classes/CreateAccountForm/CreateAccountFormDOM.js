
function CreateAccountFormDOM(){

	var ids = new IDs();

	this.createAccountForm = $('#' + ids.createAccountForm);
	this.accountCreationUnsuccessful = $('#' + ids.creationUnsuccessful);
	this.newUsernameInput = $('#' + ids.newUsernameInput);
	this.newPasswordInput = $('#' + ids.createAccountPassword);
	this.newPassword2Input = $('#' + ids.createAccountPassword2);

}
