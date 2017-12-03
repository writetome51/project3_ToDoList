
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
        var itemText = uim.getItemText(listItem);
        uim.removeBoth(listItem, itemText);
    };


    this.handleNewListAction = function(){
        uim.showNewListForm();
    };


    this.handleNewListCreation = function(){
        uim.handleNewListCreation();
    };


    this.handleNewListItemAddition = function(){
        uim.handleNewListItemAddition();
    };


    this.handleAccountCreation = function(){
        uim.handleAccountCreation();
    };


    this.handleLogin = function() {
        var values = uim.getLoginValues();
        model.login(values.username, values.password);
        this.redirectToHome();
    };


    this.handleLogout = function() {
        model.logout();
        uim.setAppearance();
    };


    this.redirectToHome = function(){
        location.replace('index.html');
    };


}
