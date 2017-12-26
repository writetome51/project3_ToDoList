
function ControllerHelper(uim){

    var model = new TodosModel();

    var cm = new ContentManager(uim, model);


    this.load = function(){
        cm.setContent();
    };


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
        cm.setContent();
    };


    this.handleNewListItemAddition = function(){
        uim.addNewItemToListOnscreen();
        model.saveListItem(uim.getNewItemText());
        cm.setContent();
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
        redirectToHome();
    };


    this.handleLogout = function() {
        model.logout();
        cm.setContent();
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
