
function ContentManager(uim, model){

    var cmh = new ContentManagerHelper();

    this.creatingNewList = false;
    this.creatingNewListItem = false;


    this.setContent = function(){
        if (model.loggedOut()){
            uim.showLoggedOutContent();
        }
        else{
            this.showLoggedInContent();
        }
    };



    this.showLoggedInContent = function(){
        this.removeUnnecessaryItemsWhenLoggedIn();
        this.showNecessaryItemsWhenLoggedIn();
    };


    this.removeUnnecessaryItemsWhenLoggedIn = function(){
        uim.removeUnnecessaryItemsWhenLoggedIn();

        if ( ! this.creatingNewList){
            this.removeUnnecessaryItemsWhenNotCreatingList();
        }
        else{
            this.removeUnnecessaryItemsWhenCreatingList();
        }
    };


    this.showNecessaryItemsWhenLoggedIn = function(){
        uim.setLoggedInHeader();
        uim.showContentNotSeenWhenLoggedOut();
        this.refreshListsMenu();
        this.setListNameHeader();

        if (this.creatingNewList || model.userHasNoLists()){
            this.showNewListForm();
        }
    };


    this.setListNameHeader = function(){
        var listName = model.getActiveListName();
        if (!listName) listName = 'Choose a list from the Lists menu';
        uim.setListNameHeader(listName);
    };


    this.removeUnnecessaryItemsWhenNotCreatingList = function(){
        uim.collapseItemsShownWhenCreatingList();
        uim.makeInvisibleItemsVisibleWhenCreatingList();
    };


    this.showNecessaryItemsWhenCreatingList = function(){
        if (this.creatingNewList){
            uim.showNecessaryItemsWhenCreatingList();
        }
    };


    this.showNewListForm = function(){
        this.creatingNewList = true;
        this.showNecessaryItemsWhenCreatingList();
        this.collapseUnnecessaryItemsWhenCreatingList();
    };



}
