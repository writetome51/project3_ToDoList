
function NewListItemFormDOMManipulator(){

	var dom = new NewListItemFormDOM();

	this.emptyNewItemForm = function(){
		dom.newListItemTextInput.val('');
	};

	/***********
	this.addNewListItemForm = function(){
		var innerHtml = '<form id="new-list-item-form"><div class="navbar-div"><div class="navbar-div top-navbar-search-container"><input type="text" id="new-item-text-input" class="form-control" placeholder="Add item to list" required  minlength="1" ></div> <div class="form-submit  navbar-div  add-item-button"><input type="submit" value="Add"></div></div></form>';

		dom.listContent.append(innerHtml);
	};
	 ************/


	this.setNewItemText = function(){
		dom.newItemText = dom.newListItemTextInput.val();
	};


	this.getNewItemText = function(){
		return dom.newListItemTextInput.val();
	};


}
