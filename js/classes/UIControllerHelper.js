
function UIControllerHelper(ui, uim){

    var model = new Model();
    var state = new UIStyleState(ui);


    this.handleNewListAction = function(){
        model.setCreatingNewList(true);
        uim.showNewListForm();
    };


    this.handleNewListCreation = function(){
        var newListName = uim.getNewListName();
        model.createNewList(newListName);
        model.setCreatingNewList(false);
    };


    this.handleAccountCreation = function(){
        var values = uim.getNewAccountValues();
        if  (model.newAccountInfoValid(
                values.username, values.password1, values.password2
            ))
        {
            this.createAccountLoginAndRedirectToHome(
                values.username, values.password1, values.password2
            );
        }
        else{
            uim.showAccountCreationUnsuccessful();
        }
    };


    this.handleLogin = function() {
        var values = uim.getLoginValues();
        model.login(values.username, values.password);
        redirectToHome();
    };


    this.handleLogout = function() {
        model.logout();
        redirectToHome();
    };


    this.createAccountLoginAndRedirectToHome = function(username, password){
        model.createAccount(username, password);
        model.login(username, password);
        redirectToHome();
    };


    function redirectToHome(){
        location.replace('index.html');
    }


}
