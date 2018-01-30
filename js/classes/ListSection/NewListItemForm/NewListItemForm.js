
function NewListItemForm(){

	var model = new Model();

	this.load = function(){
		var listName = model.getActiveListName();
		var fdm = new NewListItemFormDOMManipulator();
		if (listName){
			fdm.addNewListItemForm();
		}
	};

}
