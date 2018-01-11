
function ListContentEventsHelper(){


	this.makeClickedItem = function(obj){
		if (state.listItemIsNotClicked(obj)){
			uim.undoClickedItem();
			uim.setClickedItem(obj);
		}
	};


	this.toggleHover = function(obj){
		if (state.hasHoveredClass(obj)){
			uim.removeHoveredClassFromListItem(obj);
		}
		else if (state.notHoveredAndNotClicked(obj)){
			uim.addHoveredClassToListItem(obj);
		}
	};


	this.handleItemDoubleClick = function(obj){
		if (state.listItemIsAlreadyClicked(obj)){
			uim.undoClickedItem();
		}
	};


	this.removeListItem = function(removeGlyph){
		var listItem = uim.getEntireListItem(removeGlyph);
		model.removeItemFromSavedList( uim.getItemText(listItem) );
		uim.removeItem(listItem);
	};


	this.handleNewListItemAddition = function(){
		uim.addNewItemToListOnscreen();
		model.saveListItem(uim.getNewItemText());
	};

}
