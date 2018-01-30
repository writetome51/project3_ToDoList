
function ListItemFormEvents(){

	this.load = function(){

		dom.newListItemForm.submit(function newListItemSubmitHandler(event){
			event.preventDefault();
			eh.handleNewListItemAddition();
			$(this).val('');
		});

	};


}
