
function UIController(ui, uim){

    var uich = new UIControllerHelper(ui, uim);

    this.loadEvents = function(){


        ui.newListAction.click(function newListActionClickHandler(){
            uich.handleNewListAction();
        });


        ui.createAccountForm.submit(function createAccountSubmitHandler(event){
            event.preventDefault();
            uich.handleAccountCreation();
        });


        ui.loginForm.submit(function loginSubmitHandler(event){
            event.preventDefault();
            uich.handleLogin();
        });


        ui.logoutLink.click(function logoutLinkHandler(){
            uich.handleLogout();
        });


        ui.newListForm.submit(function newListSubmitHandler(event){
            event.preventDefault();
            uich.handleNewListCreation();
        });


        (new ListsMenuEvents(ui)).load();

    };


}
