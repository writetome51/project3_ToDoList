
function ListsMenu(model){

	var dom = new ListsMenuDOM();
	var dm = new ListsMenuDOMManipulator(dom);


    this.load = function(){
        var items = model.getUsersListNames();
        dm.createListsMenuItems(items);
    };


}
