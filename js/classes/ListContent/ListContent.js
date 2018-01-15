
function ListContent(listName){

	var model = new Model();

	listName = listName || model.getActiveListName();

    model.setActiveList(listName);

    var dom = new ListContentDOM();

    var dm = new ListContentDOMManipulator(dom);

    var rr = new ElementRemoverRevealer();


    this.load = function(){
    	this.removeUnnecessaryItemsWhenViewingList();
		this.showNecessaryItemsWhenViewingList();
    	this.setListNameHeader();
    	this.displayActiveListItems();
		(new ListContentEvents()).load();
    };


	this.removeUnnecessaryItemsWhenViewingList = function(){
		rr.collapse($('.collapse-when-viewing-list'));
		rr.makeInvisible($('.invisible-when-viewing-list'));
	};


	this.showNecessaryItemsWhenViewingList = function(){
		rr.unCollapse( $('.collapse-when-creating-list') );
		rr.makeVisible( $('.invisible-when-creating-list') );
	};


	this.setListNameHeader = function(){
		var listName = model.getActiveListName();
		if (!listName) listName = 'Choose a list from the Lists menu';
		dm.setListNameHeader(listName);
	};


	this.displayActiveListItems = function(){
		var listItems = model.extractListItemArray();
		dm.displayAllListItems(listItems);
	};


}
