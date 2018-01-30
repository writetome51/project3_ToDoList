
function NewListFormEventsHelper(dom){

	var model = new Model();
	var state = new AppState(model);
	var dm = new NewListFormDOMManipulator(dom);


	this.handleNewListCreation = function(){
		var newListName = dm.getNewListName();
		model.createNewList(newListName);
		state.setCreatingNewList(false);
		(new ListsMenu(model)).load();
		(new ListContent()).reload();
		(new ListContentEvents()).load();
		(new NewListItemForm()).load();
		(new NewListItemFormEvents()).load();
	};
    

}
