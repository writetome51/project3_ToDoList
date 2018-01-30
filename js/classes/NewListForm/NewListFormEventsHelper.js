
function NewListFormEventsHelper(dom){

	var model = new Model();
	var dm = new NewListFormDOMManipulator(dom);


	this.handleNewListCreation = function(){
		var newListName = dm.getNewListName();
		model.createNewList(newListName);
		model.setCreatingNewList(false);
		(new ListsMenu(model)).load();
		(new ListContent(newListName)).reload();
	};
    

}
