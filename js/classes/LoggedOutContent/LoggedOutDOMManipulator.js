

function LoggedOutDOMManipulator(dom){

	var classes = new CSSClasses();
    var rr = new ElementRemoverRevealer(dom, classes);
    var navbar = new NavbarDOMManipulator();


    this.collapseItemsToBeCollapsedWhenLoggedOut = function(){
        rr.collapse($('.' + classes.collapseWhenLoggedOut));
    };


    this.unCollapseItemsToBeUncollapsedWhenLoggedOut =  function(){
        navbar.unCollapseLoginAndCreateAccountLinks();
    };


    this.makeInvisibleItemsToBeInvisibleWhenLoggedOut = function(){
        rr.makeInvisible($('.' + classes.invisibleWhenLoggedOut));
    };


    this.makeVisibleItemsToBeVisibleWhenLoggedOut = function(){

    };


    this.setLoggedOutHeader = function(){
		navbar.setLoggedOutHeader();
	};


}
