
function DOMController(){

    this.loadEvents = function(){

		(new LoginLogoutEvents()).load();

		(new CreateAccountFormEvents()).load();

		(new ActionsMenuEvents()).load();

        (new ListsMenuEvents()).load();

		(new ListContentEvents()).load();

		(new NewListFormEvents()).load();

    };

}
