
function ActionsMenuEventsHelper(dom){

	var model = new Model();
	var state = new AppState(model);

	this.handleNewListAction = function(){
		state.setCreatingNewList(true);
		(new NewListForm()).load();
	};

}
