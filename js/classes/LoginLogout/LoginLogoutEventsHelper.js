function LoginLogoutEventsHelper(dom) {

	var dm = new LoginLogoutDOMManipulator();
	var eh = new BaseEventsHelper();

	this.handleLogin = function() {
		var values = dm.getLoginValues();
		model.login(values.username, values.password);
		eh.redirectToHome();
	};


	this.handleLogout = function() {
		model.logout();
		eh.redirectToHome();
	};

}
