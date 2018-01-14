
function ActionsMenuEvents(dom, dm){

	this.load = function(){

		var eh = new NewListFormEventsHelper(dom);

		dom.newListAction.click(function newListActionClickHandler(){
			eh.handleNewListAction();
		});

	};

}
