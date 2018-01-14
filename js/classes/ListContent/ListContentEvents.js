
function ListContentEvents(){

	var eh = new ListContentEventsHelper();

	this.load = function(){

		dom.itemText.click(function clickItemHandler(){
			dmch.makeClickedItem($(this));
		});


		dom.itemText.blur(function itemBlurHandler(){
			dm.saveListItem($(this));
		});


		dom.itemText.hover(function hoverHandler(){
			dmch.toggleHover($(this));
		});


		dom.itemText.dblclick(function doubleClickHandler(){
			dmch.handleItemDoubleClick();
		});


		dom.removeGlyph.click(function removeListItemHandler(){
			dmch.removeListItem($(this));
		});


		dom.todoCheckbox.click(function checkboxClickHandler(){
			var deleteButton = $(this).siblings('span.' + removeGlyphiconClass);
			if ($(this).prop('checked')){
				deleteButton.removeClass(invisibleClass);
			}
			else{
				deleteButton.addClass(invisibleClass);
			}
		});


		dom.newListItemForm.submit(function newListItemSubmitHandler(event){
			event.preventDefault();
			dmch.handleNewListItemAddition();
		});


	};


}
