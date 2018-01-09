
function NewListFormEvents(ui){


	ui.newListForm.submit(function newListSubmitHandler(event){
		event.preventDefault();
		uich.handleNewListCreation();
	});
    

}
