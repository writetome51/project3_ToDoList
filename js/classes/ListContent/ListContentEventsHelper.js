
function ListContentEventsHelper(dom){

	var dm = new ListContentDOMManipulator(dom);
	var model = new Model();
	var state = new ListContentStyleState(dom);

	this.makeClickedItem = function(obj){
		if (state.listItemIsNotClicked(obj)){
			dm.undoClickedItem();
			dm.setClickedItem(obj);
		}
	};


	this.toggleHover = function(obj){
		if (state.hasHoveredClass(obj)){
			dm.removeHoveredClassFromListItem(obj);
		}
		else if (state.notHoveredAndNotClicked(obj)){
			dm.addHoveredClassToListItem(obj);
		}
	};


	this.handleItemDoubleClick = function(obj){
		if (state.listItemIsAlreadyClicked(obj)){
			dm.undoClickedItem();
		}
	};


	this.removeListItem = function(removeGlyph){
		var listItem = dm.getEntireListItem(removeGlyph);
		model.removeItemFromSavedList( dm.getItemText(listItem) );
		dm.removeItem(listItem);
	};


	this.handleNewListItemAddition = function(){
		dm.addNewItemToListOnscreen();
		model.saveNewListItem(dm.getNewItemText());
		dm.displayAllListItems(model.extractListItemArray());
	};

}
