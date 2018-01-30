function LoginLogoutModel() {

	var model = new Model();
	var bs = new BrowserStorage();
	var validator = new ModelValidator(bs);



	this.login = function(username, password){
		if (validator.loginValid(username, model.userKey(username), password)){
			sessionStorage.setItem(model.sessionKeyLoggedInUser, username);
		}
	};


	this.logout = function(){
		sessionStorage.clear();
	};

}
