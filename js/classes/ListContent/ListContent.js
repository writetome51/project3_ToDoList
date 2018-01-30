
function ListContent(){

	var model = new Model();

	var listName = model.getActiveListName();
	console.log(listName);

    var dom = new ListContentDOM();

    var dm = new ListContentDOMManipulator(dom);

    var rr = new ElementRemoverRevealer();


    this.load = function(){
    	this.onlyShowNecessaryItemsForViewingList();
    	this.showActiveList();
    	if (listName){
			dm.addNewListItemForm();
		}
		(new ListContentEvents()).load();
    };


	this.reload = function(){
		this.onlyShowNecessaryItemsForViewingList();
		dm.emptyListContent();
		this.showActiveList();
		dm.addNewListItemForm();
		(new ListContentEvents()).load();
	};


	this.onlyShowNecessaryItemsForViewingList = function(){
		this.removeUnnecessaryItemsWhenViewingList();
		this.showNecessaryItemsWhenViewingList();
	};


    this.showActiveList = function(){
		dm.setListNameHeader(model);
		dm.displayActiveListItems(model);
	};



	this.removeUnnecessaryItemsWhenViewingList = function(){
		rr.collapse($('.collapse-when-viewing-list'));
		rr.makeInvisible($('.invisible-when-viewing-list'));
	};


	this.showNecessaryItemsWhenViewingList = function(){
		rr.unCollapse( $('.collapse-when-creating-list') );
		rr.makeVisible( $('.invisible-when-creating-list') );
	};





}
