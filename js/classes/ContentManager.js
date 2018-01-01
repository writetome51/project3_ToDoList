
function ContentManager(){

    var ui = new UI();
    var uim = new UIManipulator(ui);
    var uic = new UIController(ui, uim);
    var lmc = new ListsMenuController();

    this.creatingNewList = false;
    this.creatingNewListItem = false;


    this.setContent = function(){
        if (model.loggedOut()){
            this.showLoggedOutContent();
        }
        else{
            this.showLoggedInContent();
        }
    };


    this.showLoggedOutContent = function(){
        this.removeUnnecessaryItemsWhenLoggedOut();
        this.showNecessaryItemsWhenLoggedOut();
    };



    this.showLoggedInContent = function(){
        this.removeUnnecessaryItemsWhenLoggedIn();
        this.showNecessaryItemsWhenLoggedIn();
    };


    this.removeUnnecessaryItemsWhenLoggedOut = function(){
        this.collapseItemsToBeCollapsedWhenLoggedOut();
        this.makeInvisibleItemsToBeInvisibleWhenLoggedOut();
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



    this.refreshListsMenuContent = function(){
        var items = model.getUsersListNames();
        uim.createListsMenuItems(items);
        uim.setListsMenuItem();
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
