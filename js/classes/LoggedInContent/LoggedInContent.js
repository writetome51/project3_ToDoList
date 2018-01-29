

function LoggedInContent(){

	var lidm = new LoggedInDOMManipulator();
	var model = new Model();
	var state = new AppState(model);


	this.load = function(){
		this.removeUnnecessaryItems();
		this.showNecessaryItems();
 	};


	this.showNecessaryItems = function(){
		lidm.showContentNotSeenWhenLoggedOut();
		lidm.setLoggedInHeader();
		(new ListsMenu(model)).load();

		if (state.creatingNewList() || model.userHasNoLists()){
			(new NewListForm()).load();
        	}
		else{
			(new ListContent()).load();
		}
	};


	this.removeUnnecessaryItems = function(){
		lidm.removeUnnecessaryItemsWhenLoggedIn();
	};


}
