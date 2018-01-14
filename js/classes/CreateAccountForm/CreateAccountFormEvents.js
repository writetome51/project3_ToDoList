
function CreateAccountFormEvents(dom, dm){

	var helper = new CreateAccountFormEventsHelper();

	this.load = function(){

		dom.createAccountForm.submit(function createAccountSubmitHandler(event){
			event.preventDefault();
			helper.handleAccountCreation();
		});

	};

}
