

function LoggedOutUIManipulator(ui){

    var egs = new ElementTextGetterSetter();

    this.setLoggedOutHeader = function(){
        ui.appNameHolder.addClass(classes.welcomeToAppName);
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
        rr.unCollapse(ui.loginAndCreateAccountLinks);
    };


    this.showAccountCreationUnsuccessful = function(){
        rr.unCollapse(ui.accountCreationUnsuccessful);
    };




}
