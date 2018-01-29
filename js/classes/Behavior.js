function Behavior() {

	this.load = function () {

		(new LoginLogoutEvents()).load();

		(new CreateAccountFormEvents()).load();

		(new ActionsMenuEvents()).load();

		(new ListsMenuEvents()).load();

		(new NewListFormEvents()).load();

	};

}
