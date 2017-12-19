
function AppearanceManager(uim, model){

    this.creatingNewList = false;


    this.setAppearance = function(){
        if (model.loggedOut()){
            uim.showLoggedOutContent();
        }
        else{
            uim.showLoggedInContent();
        }
    };



    this.showLoggedOutContent = function(){
        this.removeUnnecessaryItemsWhenLoggedOut();
        this.showNecessaryItemsWhenLoggedOut();
        this.setLoggedOutHeader();
    };


    this.showLoggedInContent = function(){
        this.showNecessaryItemsWhenLoggedIn();
        this.removeUnnecessaryItemsWhenLoggedIn();
    };




    this.showNecessaryItemsWhenLoggedIn = function(){
        this.setLoggedInHeader();
        this.showContentCollapsedOrInvisibleWhenLoggedOut();
        this.refreshListsMenu();
        this.setListNameHeader();

        if (this.creatingNewList || model.userHasNoLists()){
            this.showNewListForm();
        }
    };



}
