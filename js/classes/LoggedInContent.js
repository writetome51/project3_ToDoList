

function LoggedInContent(uim,  model){

    var lm = new ListsMenu(uim, model);
    var lc = new ListContent(uim, model);


    this.load = function(){
        this.removeUnnecessaryItems();
        this.showNecessaryItems();
    };


    this.showNecessaryItems = function(){
        uim.setLoggedInHeader();
        this.showContentNotSeenWhenLoggedOut();
        lm.load();
        lc.setListNameHeader();

        if (model.creatingNewList() || model.userHasNoLists()){
			(new NewListForm(ui)).load();
        }
    };


    this.removeUnnecessaryItems = function(){
        uim.removeUnnecessaryItemsWhenLoggedIn();

        if ( ! model.creatingNewList()){
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


    this.removeUnnecessaryItemsWhenNotCreatingList = function(){
        uim.collapseItemsShownWhenCreatingList();
        uim.makeInvisibleItemsVisibleWhenCreatingList();
    };


}
