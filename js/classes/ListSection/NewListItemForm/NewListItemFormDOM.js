
function NewListItemFormDOM(){

	var ids = new IDs();

	this.newListItem = '';
	this.newItemText = '';
	this.newListItemTextInput = $('#' + ids.newItemTextInput);
	this.newListItemForm = $('#' + ids.newListItemForm);

}

NewListItemFormDOM.prototype = new ListDOM();