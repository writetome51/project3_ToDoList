
function DOMControllerHelper(dom, dm){

    var model = new Model();
    var state = new DOMStyleState(dom);


    this.handleNewListAction = function(){
        model.setCreatingNewList(true);
        dm.showNewListForm();
    };


    this.handleNewListCreation = function(){
        var newListName = dm.getNewListName();
        model.createNewList(newListName);
        model.setCreatingNewList(false);
    };


    this.handleAccountCreation = function(){
        var values = dm.getNewAccountValues();
        if  (model.newAccountInfoValid(
                values.username, values.password1, values.password2
            ))
        {
            this.createAccountLoginAndRedirectToHome(
                values.username, values.password1, values.password2
            );
        }
        else{
            dm.showAccountCreationUnsuccessful();
        }
    };


    this.handleLogin = function() {
        var values = dm.getLoginValues();
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
