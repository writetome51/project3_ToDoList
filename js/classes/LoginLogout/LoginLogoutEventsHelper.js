function LoginLogoutEventsHelper(dom, dm) {

	this.handleLogin = function() {
		var values = dm.getLoginValues();
		model.login(values.username, values.password);
		redirectToHome();
	};


	this.handleLogout = function() {
		model.logout();
		redirectToHome();
	};

}
