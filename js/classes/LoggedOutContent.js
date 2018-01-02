

function LoggedOutContent(uim){

    this.load = function(){
        this.removeUnnecessaryItemsWhenLoggedOut();
        this.showNecessaryItemsWhenLoggedOut();
    };


    this.removeUnnecessaryItemsWhenLoggedOut = function(){
        uim.collapseItemsToBeCollapsedWhenLoggedOut();
        uim.makeInvisibleItemsToBeInvisibleWhenLoggedOut();
    };


    this.showNecessaryItemsWhenLoggedOut = function(){
        uim.unCollapseItemsToBeUncollapsedWhenLoggedOut();
        uim.makeVisibleItemsToBeVisibleWhenLoggedOut();
        uim.setLoggedOutHeader();
    };

}
