
function CreateAccountFormEventsHelper(dom, dm){

	var eh = new BaseEventsHelper();
	var model = new Model();

	this.handleAccountCreation = function(){
		var values = dm.getNewAccountValues();
		if  (model.newAccountInfoValid(
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
		model.createAccount(username, password);
		model.login(username, password);
		eh.redirectToHome();
	};


}
