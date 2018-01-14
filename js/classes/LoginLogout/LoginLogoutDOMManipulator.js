function LoginLogoutDOMManipulator(dom) {

	this.getLoginValues = function () {
		var values = {};
		values.username = dom.loginUsername.val();
		values.password = dom.loginPassword.val();
		return values;
	};

}
