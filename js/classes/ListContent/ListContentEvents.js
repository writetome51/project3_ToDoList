
function ListContentEvents(){

	var dom = new ListContentDOM();
	var eh = new ListContentEventsHelper(dom);

	this.load = function(){

		dom.itemText.click(function clickItemHandler(){
			eh.makeClickedItem($(this));
		});


		dom.itemText.blur(function itemBlurHandler(){
			dm.saveListItem($(this));
		});


		dom.itemText.hover(function hoverHandler(){
			eh.toggleHover($(this));
		});


		dom.itemText.dblclick(function doubleClickHandler(){
			eh.handleItemDoubleClick();
		});


		dom.removeGlyph.click(function removeListItemHandler(){
			eh.removeListItem($(this));
		});


		dom.newListItemForm.submit(function newListItemSubmitHandler(event){
			event.preventDefault();
			eh.handleNewListItemAddition();
			$(this).val('');
		});


/**************
		dom.todoCheckbox.click(function checkboxClickHandler(){
			var deleteButton = $(this).siblings('span.' + removeGlyphiconClass);
			if ($(this).prop('checked')){
				deleteButton.removeClass(invisibleClass);
			}
			else{
				deleteButton.addClass(invisibleClass);
			}
		});
 ************/




	};


}
