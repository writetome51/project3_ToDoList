

function LoggedInDOMManipulator(){

    var classes = new CSSClasses();

    var rr = new ElementRemoverRevealer();
    var navbar_dm = new NavbarDOMManipulator();


    this.setLoggedInHeader = function(){
    	navbar_dm.setLoggedInHeader();
	};


	this.showContentNotSeenWhenLoggedOut = function(){
		this.uncollapseItemsToBeUncollapsedWhenLoggedIn();
		this.makeVisibleItemsToBeVisibleWhenLoggedIn();
	};


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
