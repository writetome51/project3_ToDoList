

function SectionRemoverRevealer(ui, uim, model){

    var classes = new TodosCSSClasses();


    this.removeUnnecessaryItemsWhenLoggedOut = function(){
        uim.collapseItemsToBeCollapsedWhenLoggedOut();
        uim.makeInvisibleItemsToBeInvisibleWhenLoggedOut();
    };


    this.showNecessaryItemsWhenLoggedOut = function(){
        uim.unCollapseItemsToBeUncollapsedWhenLoggedOut();
        uim.makeVisibleItemsToBeVisibleWhenLoggedOut();
        this.setLoggedOutHeader();
    };



    this.showContentNotSeenWhenLoggedOut = function(){
        uim.uncollapseItemsToBeUncollapsedWhenLoggedIn();
        uim.makeVisibleItemsToBeVisibleWhenLoggedIn();

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


    this.removeUnnecessaryItemsWhenLoggedIn = function(){
        uim.removeUnnecessaryItemsWhenLoggedIn();

        if ( ! this.creatingNewList){
            this.removeUnnecessaryItemsWhenNotCreatingList();
        }
        else{
            this.removeUnnecessaryItemsWhenCreatingList();
        }
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


}
