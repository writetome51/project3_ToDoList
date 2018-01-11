
function NewListFormDOMManipulator(dom){

	this.showNecessaryItemsWhenCreatingList = function(){
		rr.unCollapse( $('.show-when-creating-list') );
		rr.makeVisible(  $('.show-when-creating-list') );
		eGetterSetter.emptyNewListNameInput();
	};


	this.removeUnnecessaryItemsWhenCreatingList = function(){
		this.collapseUnnecessaryItemsWhenCreatingList();
	};


	this.collapseUnnecessaryItemsWhenCreatingList = function(){
		rr.collapse( $('.collapse-when-creating-list') );
	};

}
