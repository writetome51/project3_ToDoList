
function NewListFormEvents(dom){


	dom.newListForm.submit(function newListSubmitHandler(event){
		event.preventDefault();
		dmch.handleNewListCreation();
	});
    

}
