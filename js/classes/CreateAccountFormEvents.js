
function CreateAccountFormEvents(ui, uim){

	this.load = function(){

		ui.createAccountForm.submit(function createAccountSubmitHandler(event){
			event.preventDefault();
			uich.handleAccountCreation();
		});

	};

}
