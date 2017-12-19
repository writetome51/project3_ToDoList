
function AppearanceManager(uim, model){

    this.creatingNewList = false;
    this.creatingNewListItem = false;


    this.setAppearance = function(){
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
        uim.collapseItemsToBeCollapsedWhenLoggedOut();
        uim.makeInvisibleItemsToBeInvisibleWhenLoggedOut();
    };


    this.showNecessaryItemsWhenLoggedOut = function(){
        uim.unCollapseLoginAndCreateAccountLinks();
        uim.setLoggedOutHeader();
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



    this.refreshListsMenu = function(){
        this.refreshListsMenuContent();
        this.refreshListsMenuBehavior();
    };


    this.refreshListsMenuContent = function(){
        var items = model.getUsersListNames();
        uim.createListsMenuItems(items);
        uim.setListsMenuItem();
    };


    this.refreshListsMenuBehavior = function(){
        this.setlistsMenuItemClickHandler(this);
    };


    this.setlistsMenuItemClickHandler = function(me){
        ui.listsMenuItem.click(function(){
            me.handleViewingSelectedList( $(this).text() );
        });
    };



    this.setListNameHeader = function(){
        var listName = model.getActiveListName();
        if (!listName) listName = 'Choose a list from the Lists menu';
        ui.listNameHeader.text(listName);
    };



    this.handleViewingSelectedList = function(listName){
        model.setActiveList(listName);
        this.setAppearance();
    };


    this.collapseUnnecessaryItemsWhenNotCreatingList = function(){
        uim.collapseItemsShownWhenCreatingList();
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
