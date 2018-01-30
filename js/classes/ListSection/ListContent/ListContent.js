
function ListContent(){

	var model = new Model();

	var listName = model.getActiveListName();

    var dom = new ListContentDOM();

    var lcdm = new ListContentDOMManipulator(dom);
    var fdm = new NewListItemFormDOMManipulator();

    var rr = new ElementRemoverRevealer();


    this.load = function(){
    	this.onlyShowNecessaryItemsForViewingList();
    	lcdm.showActiveList(model);
    	if (listName){
			fdm.addNewListItemForm();
		}
    };


	this.reload = function(){
		this.onlyShowNecessaryItemsForViewingList();
		lcdm.emptyListContent();
		lcdm.showActiveList(model);
		fdm.addNewListItemForm();
	};


	this.onlyShowNecessaryItemsForViewingList = function(){
		this.removeUnnecessaryItemsWhenViewingList();
		this.showNecessaryItemsWhenViewingList();
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
