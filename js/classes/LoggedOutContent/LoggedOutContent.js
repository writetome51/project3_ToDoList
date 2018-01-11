

function LoggedOutContent(dom){

	var lodm = new LoggedOutDOMManipulator(dom);

    this.load = function(){
        this.removeUnnecessaryItems();
        this.showNecessaryItems();
    };


    this.removeUnnecessaryItems = function(){
        lodm.collapseItemsToBeCollapsedWhenLoggedOut();
        lodm.makeInvisibleItemsToBeInvisibleWhenLoggedOut();
    };


    this.showNecessaryItems = function(){
        lodm.unCollapseItemsToBeUncollapsedWhenLoggedOut();
        lodm.makeVisibleItemsToBeVisibleWhenLoggedOut();
        lodm.setLoggedOutHeader();
    };

}
