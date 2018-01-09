

function LoggedInUIManipulator(ui){

    var classes = new CSSClasses();

    var rr = new ElementRemoverRevealer(ui, classes);
    var egs = new ElementTextGetterSetter(ui, classes);

    this.removeUnnecessaryItemsWhenLoggedIn = function(){
        rr.collapse( $('.' + classes.collapseWhenLoggedIn) );
        rr.makeInvisible( $('.' + classes.invisibleWhenLoggedIn) );
    };


    this.uncollapseItemsToBeUncollapsedWhenLoggedIn = function(){
        rr.unCollapse( $('.' + classes.collapseWhenLoggedOut) );
    };


    this.makeVisibleItemsToBeVisibleWhenLoggedIn = function(){
        rr.makeVisible( $('.' + classes.invisibleWhenLoggedOut) );
    };


    this.setLoggedInHeader = function(){
        ui.appNameHolder.removeClass(classes.welcomeToAppName);
        egs.setAppNameHeader();
    };


    this.collapseItemsShownWhenCreatingList = function(){
        rr.collapse($('.show-when-creating-list'));
    };


    this.makeInvisibleItemsVisibleWhenCreatingList = function(){

    };


    this.showNecessaryItemsWhenNotCreatingList = function(){
        rr.unCollapse( $('.collapse-when-creating-list') );
        rr.makeVisible( $('.invisible-when-creating-list') );
    };

}