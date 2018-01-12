
function DOMController(dom){

    this.loadEvents = function(){

		(new LoginLogoutEvents(dom)).load();

		(new CreateAccountFormEvents(dom)).load();

		(new ActionsMenuEvents(dom)).load();

        (new ListsMenuEvents(dom)).load();

		(new ListContentEvents(dom)).load();

    };

}
