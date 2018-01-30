
function CreateAccountModel(){

	var bs = new BrowserStorage();
	var validator = new ModelValidator(bs);
	var model = new Model();

	this.createAccount = function(username, password){
		var newUser = this.userKey(username);
		bs.addToLocalStorageAsJSON(newUser, model.initialUserData(password));
	};

	this.newAccountInfoValid = function(username, password1, password2){
		return validator.newAccountInfoValid(username, password1, password2);
	};


}
