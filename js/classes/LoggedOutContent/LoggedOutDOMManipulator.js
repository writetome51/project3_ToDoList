

function LoggedOutDOMManipulator(dom){

	var classes = new CSSClasses();
    var egs = new ElementTextGetterSetter(dom, classes);
    var rr = new ElementRemoverRevealer(dom, classes);


    this.setLoggedOutHeader = function(){
        dom.appNameHolder.addClass(classes.welcomeToAppName);
        egs.setAppNameHeader();
    };


    this.collapseItemsToBeCollapsedWhenLoggedOut = function(){
        rr.collapse($('.' + classes.collapseWhenLoggedOut));
    };


    this.unCollapseItemsToBeUncollapsedWhenLoggedOut =  function(){
        this.unCollapseLoginAndCreateAccountLinks();
    };


    this.makeInvisibleItemsToBeInvisibleWhenLoggedOut = function(){
        rr.makeInvisible($('.' + classes.invisibleWhenLoggedOut));
    };


    this.makeVisibleItemsToBeVisibleWhenLoggedOut = function(){

    };


    this.unCollapseLoginAndCreateAccountLinks = function(){
        rr.unCollapse(dom.loginAndCreateAccountLinks);
    };


    this.showAccountCreationUnsuccessful = function(){
        rr.unCollapse(dom.accountCreationUnsuccessful);
    };

}
