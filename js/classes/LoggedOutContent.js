

function LoggedOutContent(uim){

    this.load = function(){
        this.removeUnnecessaryItems();
        this.showNecessaryItems();
    };


    this.removeUnnecessaryItems = function(){
        uim.collapseItemsToBeCollapsedWhenLoggedOut();
        uim.makeInvisibleItemsToBeInvisibleWhenLoggedOut();
    };


    this.showNecessaryItems = function(){
        uim.unCollapseItemsToBeUncollapsedWhenLoggedOut();
        uim.makeVisibleItemsToBeVisibleWhenLoggedOut();
        uim.setLoggedOutHeader();
    };

}
