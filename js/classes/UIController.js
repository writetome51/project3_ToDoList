
function UIController(ui, uim){

    var uich = new UIControllerHelper(ui, uim);

    this.loadEvents = function(){

		(new CreateAccountFormEvents(ui, uim)).load();

		(new ActionsMenuEvents(ui,uim)).load();

        (new ListsMenuEvents(ui)).load();

		(new ListContentEvents(ui,uim)).load();

    };


}
