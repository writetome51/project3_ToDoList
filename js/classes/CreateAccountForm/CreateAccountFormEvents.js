
function CreateAccountFormEvents(){

	var dom = new CreateAccountFormDOM();
	var helper = new CreateAccountFormEventsHelper(dom);

	this.load = function(){

		dom.createAccountForm.submit(function createAccountSubmitHandler(event){
			event.preventDefault();
			helper.handleAccountCreation();
		});

	};

}
