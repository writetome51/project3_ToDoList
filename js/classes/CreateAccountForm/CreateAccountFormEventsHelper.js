
function CreateAccountFormEventsHelper(dom){

	var dm = new CreateAccountFormDOMManipulator(dom);
	var eh = new BaseEventsHelper();
	var createModel = new CreateAccountModel();
	var logModel = new LoginLogoutModel();

	this.handleAccountCreation = function(){
		var values = dm.getNewAccountValues();
		if  (createModel.newAccountInfoValid(
				values.username, values.password1, values.password2
			))
		{
			this.createAccountLoginAndRedirectToHome(
				values.username, values.password1, values.password2
			);
		}
		else{
			dm.showAccountCreationUnsuccessful();
		}
	};


	this.createAccountLoginAndRedirectToHome = function(username, password){
		createModel.createAccount(username, password);
		logModel.login(username, password);
		eh.redirectToHome();
	};


}
