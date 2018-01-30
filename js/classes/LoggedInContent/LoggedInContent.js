

function LoggedInContent(){

	var dm = new LoggedInDOMManipulator();
	var model = new Model();
	var state = new AppState(model);


	this.load = function(){
		this.removeUnnecessaryItems();
		this.showNecessaryItems();
 	};


	this.showNecessaryItems = function(){
		dm.showContentNotSeenWhenLoggedOut();
		dm.setLoggedInHeader();
		(new ListsMenu(model)).load();

		if (state.creatingNewList() || model.userHasNoLists()){
			(new NewListForm()).load();
		}
		else{
			(new ListSection()).load();
		}
	};


	this.removeUnnecessaryItems = function(){
		dm.removeUnnecessaryItemsWhenLoggedIn();
	};


}
