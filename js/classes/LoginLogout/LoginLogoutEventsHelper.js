function LoginLogoutEventsHelper(dom) {

	var dm = new LoginLogoutDOMManipulator(dom);
	var eh = new BaseEventsHelper();
	var model = new LoginLogoutModel();

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
