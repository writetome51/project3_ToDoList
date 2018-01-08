

function LoggedOutUIManipulator(ui){

    this.setLoggedOutHeader = function(){
        ui.appNameHolder.addClass(classes.welcomeToAppName);
        eGetterSetter.setWelcomeAppNameHeader();
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


}
