
function ListsMenuDOM(){

	var ids = new IDs();

	this.noListsFound = 'No Lists';
	this.listsMenu = $('#' + ids.listsMenu);
	this.listsMenuItems = $('#' + ids.listNames);
	this.listsMenuItem = false; // at page load, they can't be accessed.
	this.addButton = $('#' + ids.addButton);

}
