
function ActionsMenuEvents(dom, dm){

	this.load = function(){

		var dmch = new DOMControllerHelper(dom, dm);

		dom.newListAction.click(function newListActionClickHandler(){
			dmch.handleNewListAction();
		});

	};

}
