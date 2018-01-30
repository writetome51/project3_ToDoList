
function ListContent(){

	var model = new Model();

    var lcdm = new ListContentDOMManipulator();

    var rr = new ElementRemoverRevealer();


    this.load = function(){
    	this.onlyShowNecessaryItemsForViewingList();
    	lcdm.showActiveList(model);
    };


	this.reload = function(){
		this.onlyShowNecessaryItemsForViewingList();
		lcdm.emptyListContent();
		lcdm.showActiveList(model);
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
