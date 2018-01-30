
function ListContentDOM(){

	var ids = new IDs();
	var classes = new CSSClasses();

	this.listNameHeader = $('#' + ids.listNameHeader);
	this.clickedItem = false;
	this.itemText = $('.' + classes.itemText);
	this.itemToHighlight = '';
	this.newListItem = '';
	this.newItemText = '';
	this.newListItemTextInput = $('#' + ids.newItemTextInput);
	this.newListItemForm = $('#' + ids.newListItemForm);
	this.removeGlyph = $('.' + classes.removeGlyphicon);
	this.todoCheckbox = $('.' + classes.itemCheckbox);
	this.todoList = $('.' + classes.todoList);

}

ListContentDOM.prototype = new ListDOM();