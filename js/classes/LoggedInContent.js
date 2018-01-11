

function LoggedInContent(dom,  model){

	var lidm = new LoggedInDOMManipulator(dom);

    var lm = new ListsMenu(lidm, model);
    var lc = new ListContent(lidm, model);


    this.load = function(){
        this.removeUnnecessaryItems();
        this.showNecessaryItems();
    };


    this.showNecessaryItems = function(){
        lidm.setLoggedInHeader();
        this.showContentNotSeenWhenLoggedOut();
        lm.load();
        lc.setListNameHeader();

        if (model.creatingNewList() || model.userHasNoLists()){
			(new NewListForm(dom)).load();
        }
    };


    this.removeUnnecessaryItems = function(){
        lidm.removeUnnecessaryItemsWhenLoggedIn();

        if ( ! model.creatingNewList()){
            this.removeUnnecessaryItemsWhenNotCreatingList();
        }
        else{
            this.removeUnnecessaryItemsWhenCreatingList();
        }
    };


    this.showContentNotSeenWhenLoggedOut = function(){
        lidm.uncollapseItemsToBeUncollapsedWhenLoggedIn();
        lidm.makeVisibleItemsToBeVisibleWhenLoggedIn();
    };


    this.removeUnnecessaryItemsWhenNotCreatingList = function(){
        lidm.collapseItemsShownWhenCreatingList();
        lidm.makeInvisibleItemsVisibleWhenCreatingList();
    };


}
