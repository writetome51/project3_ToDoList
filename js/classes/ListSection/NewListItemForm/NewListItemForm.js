
function NewListItemForm(){

	var model = new Model();

	this.load = function(){
		var listName = model.getActiveListName();
		if (listName){
			var fdm = new NewListItemFormDOMManipulator();
		//	fdm.addNewListItemForm();
		}
	};

}
