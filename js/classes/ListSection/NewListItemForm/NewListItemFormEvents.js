
function NewListItemFormEvents(){

	var dom = new NewListItemFormDOM();
	var dm = new NewListItemFormDOMManipulator(dom);
	var model = new Model();

	this.load = function(){

		dom.newListItemForm.submit(function newListItemSubmitHandler(event){
			event.preventDefault();
			handleNewListItemAddition();
			$(this).val('');
		});

	};


	var handleNewListItemAddition = function(){
		model.saveNewListItem(dm.getNewItemText());
		model.refreshActiveList();
		dm.emptyNewItemForm();
		(new ListContent()).reload();
		(new ListContentEvents()).load();
		// Working Perfectly!!!
	};


}
