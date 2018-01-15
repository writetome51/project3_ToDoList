
function ActionsMenuEventsHelper(dom){

	var model = new Model();

	this.handleNewListAction = function(){
		model.setCreatingNewList(true);
		(new NewListForm()).load();
	};

}
