
function ListContentEvents(ui, uim){


	ui.itemText.click(function clickItemHandler(){
		uich.makeClickedItem($(this));
	});


	ui.itemText.blur(function itemBlurHandler(){
		uim.saveListItem($(this));
	});


	ui.itemText.hover(function hoverHandler(){
		uich.toggleHover($(this));
	});


	ui.itemText.dblclick(function doubleClickHandler(){
		uich.handleItemDoubleClick();
	});


	ui.removeGlyph.click(function removeListItemHandler(){
		uich.removeListItem($(this));
	});


	ui.todoCheckbox.click(function checkboxClickHandler(){
		var deleteButton = $(this).siblings('span.' + removeGlyphiconClass);
		if ($(this).prop('checked')){
			deleteButton.removeClass(invisibleClass);
		}
		else{
			deleteButton.addClass(invisibleClass);
		}
	});


	ui.newListItemForm.submit(function newListItemSubmitHandler(event){
		event.preventDefault();
		uich.handleNewListItemAddition();
	});


}
