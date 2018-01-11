
function DOMController(dom, dm){

    var dmch = new DOMControllerHelper(dom, dm);

    this.loadEvents = function(){

		(new CreateAccountFormEvents(dom, dm)).load();

		(new ActionsMenuEvents(dom, dm)).load();

        (new ListsMenuEvents(dom)).load();

		(new ListContentEvents(dom, dm)).load();

    };


}
