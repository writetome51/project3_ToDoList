
function UIControllerHelper(ui, uim){

    var model = new Model();
    var state = new UIStyleState(ui);


    this.makeClickedItem = function(obj){
        if (state.listItemIsNotClicked(obj)){
            uim.undoClickedItem();
            uim.setClickedItem(obj);
        }
    };


    this.toggleHover = function(obj){
        if (state.hasHoveredClass(obj)){
            uim.removeHoveredClassFromListItem(obj);
        }
        else if (state.notHoveredAndNotClicked(obj)){
            uim.addHoveredClassToListItem(obj);
        }
    };


    this.handleItemDoubleClick = function(obj){
        if (state.listItemIsAlreadyClicked(obj)){
            uim.undoClickedItem();
        }
    };


    this.removeListItem = function(removeGlyph){
        var listItem = uim.getEntireListItem(removeGlyph);
        model.removeItemFromSavedList( uim.getItemText(listItem) );
        uim.removeItem(listItem);
    };


    this.handleNewListAction = function(){
        model.setCreatingNewList(true);
        uim.showNewListForm();
    };


    this.handleNewListCreation = function(){
        var newListName = uim.getNewListName();
        model.createNewList(newListName);
        model.setCreatingNewList(false);
    };


    this.handleNewListItemAddition = function(){
        uim.addNewItemToListOnscreen();
        model.saveListItem(uim.getNewItemText());
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
