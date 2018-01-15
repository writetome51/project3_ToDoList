
function ListContent(listName){

	var model = new Model();

	listName = listName || model.getActiveListName();

    model.setActiveList(listName);

    var dom = new ListContentDOM();

    var dm = new ListContentDOMManipulator(dom);


    this.load = function(){

    	this.setListNameHeader();

    };


	this.setListNameHeader = function(){
		var listName = model.getActiveListName();
		if (!listName) listName = 'Choose a list from the Lists menu';
		dm.setListNameHeader(listName);
	};

}
