
function ListContent(listName){

	listName = listName || null;

    var model = new Model();
    model.setActiveList(listName);

    var dm = new ListContentDOMManipulator();


    this.load = function(){

    	this.setListNameHeader();

    };


	this.setListNameHeader = function(){
		var listName = model.getActiveListName();
		if (!listName) listName = 'Choose a list from the Lists menu';
		dm.setListNameHeader(listName);
	};

}
