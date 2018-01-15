function NavbarDOMManipulator(){

	var dom = new NavbarDOM();
	var classes = new CSSClasses();
	var rr = new ElementRemoverRevealer(dom, classes);


	this.setLoggedOutHeader = function(){
		dom.appNameHolder.addClass(classes.welcomeToAppName);
		this.setAppNameHeader();
	};


	this.setLoggedInHeader = function(){
		dom.appNameHolder.removeClass(classes.welcomeToAppName);
		this.setAppNameHeader();
	};


	this.setAppNameHeader = function(){
		dom.appNameHeader.text(dom.appNameForDisplay);
	};


	this.unCollapseLoginAndCreateAccountLinks = function(){
		rr.unCollapse(dom.loginAndCreateAccountLinks);
	};

}
