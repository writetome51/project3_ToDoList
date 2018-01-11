
function ActionsMenuEvents(dom, dm){

	this.load = function(){

		dom.newListAction.click(function newListActionClickHandler(){
			dmch.handleNewListAction();
		});

	};

}
