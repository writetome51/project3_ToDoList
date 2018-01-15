
function NewListFormEvents(){

	var dom = new NewListFormDOM();
	var eh = new NewListFormEventsHelper(dom);


	this.load = function(){

		dom.newListForm.submit(function newListSubmitHandler(event){
			event.preventDefault();
			eh.handleNewListCreation();
		});

	};


}
