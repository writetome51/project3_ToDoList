
function CreateAccountFormEvents(dom, dm){

	this.load = function(){

		dom.createAccountForm.submit(function createAccountSubmitHandler(event){
			event.preventDefault();
			dmch.handleAccountCreation();
		});

	};

}
