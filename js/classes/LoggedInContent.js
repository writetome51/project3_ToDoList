

function LoggedInContent(ui, uim,  model){

    var lm = new ListsMenu(ui, uim, model);


    this.load = function(){
        this.removeUnnecessaryItems();
        this.showNecessaryItems();
    };


    this.showNecessaryItems = function(){
        uim.setLoggedInHeader();
        this.showContentNotSeenWhenLoggedOut();
        lm.refreshListsMenu();
        this.setListNameHeader();

        if (this.creatingNewList || model.userHasNoLists()){
            this.showNewListForm();
        }
    };


    this.removeUnnecessaryItems = function(){
        uim.removeUnnecessaryItemsWhenLoggedIn();

        if ( ! this.creatingNewList){
            this.removeUnnecessaryItemsWhenNotCreatingList();
        }
        else{
            this.removeUnnecessaryItemsWhenCreatingList();
        }
    };


    this.showContentNotSeenWhenLoggedOut = function(){
        uim.uncollapseItemsToBeUncollapsedWhenLoggedIn();
        uim.makeVisibleItemsToBeVisibleWhenLoggedIn();
    };


    this.showNecessaryItemsWhenCreatingList = function(){
        if (model.creatingNewList()){
            uim.showNecessaryItemsWhenCreatingList();
        }
    };


    this.removeUnnecessaryItemsWhenCreatingList = function(){
        uim.collapseUnnecessaryItemsWhenCreatingList();
    };


    this.removeUnnecessaryItemsWhenNotCreatingList = function(){
        uim.collapseItemsShownWhenCreatingList();
        uim.makeInvisibleItemsVisibleWhenCreatingList();
    };


    this.setListNameHeader = function(){
        var listName = model.getActiveListName();
        if (!listName) listName = 'Choose a list from the Lists menu';
        uim.setListNameHeader(listName);
    };



    this.showNewListForm = function(){
        this.creatingNewList = true;
        this.showNecessaryItemsWhenCreatingList();
        uim.collapseUnnecessaryItemsWhenCreatingList();
    };


}
