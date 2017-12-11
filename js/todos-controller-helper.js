
function ControllerHelper(uim, model){

    this.makeClickedItem = function(obj){
        if (uim.listItemIsNotClicked(obj)){
            uim.undoClickedItem();
            uim.setClickedItem(obj);
        }
    };


    this.toggleHover = function(obj){
        if (uim.hasHoveredClass(obj)){
            uim.removeHoveredClassFromListItem(obj);
        }
        else if (uim.notHoveredAndNotClicked(obj)){
            uim.addHoveredClassToListItem(obj);
        }
    };


    this.handleItemDoubleClick = function(obj){
        if (uim.listItemIsAlreadyClicked(obj)){
            uim.undoClickedItem();
        }
    };



    this.removeListItem = function(removeGlyph){
        var listItem = uim.getEntireListItem(removeGlyph);
        model.removeItemFromSavedList( uim.getItemText(listItem) );
        uim.removeItem(listItem);
    };




    this.handleNewListAction = function(){
        uim.showNewListForm();
    };




    this.handleNewListCreation = function(){
        var newListName = uim.getNewListName();
        model.createNewList(newListName);
        uim.creatingNewList = false;
        uim.setAppearance();
    };





    this.handleNewListItemAddition = function(){
        uim.addNewItemToListOnscreen();
        model.saveListItem(ui.newListItem);
        uim.setAppearance(model.loggedOut());
    };


    this.handleAccountCreation = function(){
        var values = uim.getNewAccountValues();
        if (model.newAccountInfoValid(
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
        this.redirectToHome();
    };


    this.handleLogout = function() {
        model.logout();
        uim.setAppearance(true); // true means logged out.
    };



    this.createAccountLoginAndRedirectToHome = function(username, password){
        model.createAccount(username, password);
        model.login(username, password);
        this.redirectToHome();
    };


    this.redirectToHome = function(){
        location.replace('index.html');
    };



    this.setAppearance = function(loggedOut){
        if (loggedOut){ //loggedOut value should be obtained from model.
            uim.showLoggedOutContent();
        }
        else{
            uim.showLoggedInContent();
        }
    };



}
