
function NewListFormDOMManipulator(dom){

	var rr = new ElementRemoverRevealer();

	this.showNecessaryItemsWhenCreatingList = function(){
		rr.unCollapse( $('.show-when-creating-list') );
		rr.makeVisible(  $('.show-when-creating-list') );
		this.emptyNewListNameInput();
	};


	this.removeUnnecessaryItemsWhenCreatingList = function(){
		this.collapseUnnecessaryItemsWhenCreatingList();
	};


	this.collapseUnnecessaryItemsWhenCreatingList = function(){
		var rr = new ElementRemoverRevealer();
		rr.collapse( $('.collapse-when-creating-list') );
	};



	this.emptyNewListNameInput = function(){
		dom.newListName.val('');
	};


	this.getNewListName = function(){
		return dom.newListName.val();
	};


}
