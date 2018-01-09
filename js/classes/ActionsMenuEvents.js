
function ActionsMenuEvents(ui, uim){

	this.load = function(){

		ui.newListAction.click(function newListActionClickHandler(){
			uich.handleNewListAction();
		});

	};

}
