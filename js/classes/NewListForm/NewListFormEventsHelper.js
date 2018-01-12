
function NewListFormEventsHelper(dom){

	this.handleNewListAction = function(){
		model.setCreatingNewList(true);
		dm.showNewListForm();
	};


	this.handleNewListCreation = function(){
		var newListName = dm.getNewListName();
		model.createNewList(newListName);
		model.setCreatingNewList(false);
	};
    

}
