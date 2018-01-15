

function LoggedInContent(){

	var lidm = new LoggedInDOMManipulator();
	var model = new Model();
	var state = new AppState(model);
    var lm = new ListsMenu(model);
    var lc = new ListContent();


    this.load = function(){
        this.removeUnnecessaryItems();
        this.showNecessaryItems();
    };


    this.showNecessaryItems = function(){
        lidm.showContentNotSeenWhenLoggedOut();
		lidm.setLoggedInHeader();
        lm.load();

        if (state.creatingNewList() || model.userHasNoLists()){
			(new NewListForm()).load();
        }
        else{
			lc.load();
		}
    };


    this.removeUnnecessaryItems = function(){
        lidm.removeUnnecessaryItemsWhenLoggedIn();

        if ( ! state.creatingNewList()){
            this.removeUnnecessaryItemsWhenNotCreatingList();
        }
        else{
            this.removeUnnecessaryItemsWhenCreatingList();
        }
    };




    this.removeUnnecessaryItemsWhenNotCreatingList = function(){
        lidm.collapseItemsShownWhenCreatingList();
        lidm.makeInvisibleItemsVisibleWhenCreatingList();
    };


}
