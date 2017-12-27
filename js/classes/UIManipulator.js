

function TodosUIManipulator(ui){

    var classes = new TodosCSSClasses();

    this.rr = new ElementRemoverRevealer(ui, classes);
    var eGetterSetter = new ElementTextGetterSetter(ui, classes);


    this.createListsMenuItems = function(items){
        eGetterSetter.createListsMenuItems(items);
    };


    this.showAccountCreationUnsuccessful = function(){
        this.rr.unCollapse(ui.accountCreationUnsuccessful);
    };


    this.addNewItemToListOnscreen = function(){
        eGetterSetter.setNewItemText();
        this.displayNewItemInList();
    };


    this.displayNewItemInList = function(){
        ui.todoList.append(ui.newListItem);
    };


    this.undoClickedItem = function(){
        if (this.thereIsAClickedItem()){
	        this.turnOffClickedBehavior();
 	    }
	    ui.clickedItem = false;
    };


	this.turnOffClickedBehavior = function(){
		this.removeClickedClass();
 		this.makeGlyphsInvisible();
 		this.makeItemNotEditable();
	};


	this.removeClickedClass = function(){
		ui.clickedItem.removeClass(classes.clicked);
	};


    this.setClickedItem = function(obj){
        ui.itemToHighlight = obj.parent('.' + classes.highlight);
        ui.clickedItem = ui.itemToHighlight;
        this.removeHoverClassAndAddClickedClass(ui.clickedItem);
        this.makeGlyphsVisible();
        this.makeItemEditable(ui.clickedItem);
    };


    this.listItemIsAlreadyClicked = function(obj){
        ui.itemToHighlight = obj.parent('.' + classes.highlight);
        return this.thisItemIsAlreadyClicked(ui.itemToHighlight);
    };


    this.listItemIsNotClicked = function(obj){
        return  ( ! this.listItemIsAlreadyClicked(obj));
    };


    this.thisItemIsAlreadyClicked = function(obj){
        return  obj.hasClass(classes.clicked);
    };



    this.makeItemEditable = function(obj){
        var currentItemText = obj.children('.' + classes.itemText);
        currentItemText.attr("contenteditable", "true");
    };


    this.makeItemNotEditable = function(){
        ui.clickedItem.children('.' + classes.itemText)
        .removeAttr('contenteditable');
    };


    this.thereIsAClickedItem = function(){
        if (ui.clickedItem){ return true; }
        else { return false; }
    };


    this.removeHoverClassAndAddClickedClass = function(obj){
        obj.removeClass(classes.hovered);
        obj.addClass(classes.clicked);
    };


    this.removeHoveredClassFromListItem = function(obj){
        ui.itemToHighlight = obj.parent('.' + classes.highlight);
        ui.itemToHighlight.removeClass(classes.hovered);
    };


    this.addHoveredClassToListItem = function(obj){
        ui.itemToHighlight = obj.parent('.' + classes.highlight);
        ui.itemToHighlight.addClass(classes.hovered);
    };


    this.hasHoveredClass = function(obj){
        return (obj.hasClass(classes.hovered));
    };


    this.notHoveredAndNotClicked = function(obj){
        return ((! obj.hasClass(classes.hovered)) &&
            (! obj.hasClass(classes.clicked)));
    };


    this.clickedItemCheckboxIsChecked = function(){
        return ui.clickedItem.children('.' + classes.itemCheckbox).prop('checked');
    };


    this.getEntireListItem = function(removeGlyph){
        return removeGlyph.closest('.' + classes.listItem);
    };


    this.showContentNotSeenWhenLoggedOut = function(){
        this.rr.unCollapse( $('.' + classes.collapseWhenLoggedOut) );
        this.rr.makeVisible( $('.' + classes.invisibleWhenLoggedOut) );
    };


    this.showListsMenuItems = function(){
        this.rr.unCollapse( ui.listsMenuItem);
    };


    this.setListsMenuItem = function(){
        ui.listsMenuItem = $('.' + classes.listsMenuItem);
    };


    this.setListNameHeader = function(listName){
        eGetterSetter.setListNameHeader(listName);
    };


    this.collapseItemsShownWhenCreatingList = function(){
        this.rr.collapse($('.show-when-creating-list'));
    };


    this.makeInvisibleItemsVisibleWhenCreatingList = function(){

    };


    this.showNecessaryItemsWhenNotCreatingList = function(){
        this.rr.unCollapse( $('.collapse-when-creating-list') );
        this.rr.makeVisible( $('.invisible-when-creating-list') );
    };


    this.showNecessaryItemsWhenCreatingList = function () {
        this.rr.unCollapse( $('.show-when-creating-list') );
        this.rr.makeVisible(  $('.show-when-creating-list') );
        eGetterSetter.emptyNewListNameInput();
    };


    this.removeUnnecessaryItemsWhenLoggedIn = function(){
        this.rr.collapse( $('.' + classes.collapseWhenLoggedIn) );
        this.rr.makeInvisible( $('.' + classes.invisibleWhenLoggedIn) );
    };


    this.collapseUnnecessaryItemsWhenCreatingList = function(){
        this.rr.collapse( $('.collapse-when-creating-list') );
    };


    this.unCollapseItemsToBeUncollapsedWhenLoggedOut =  function(){
        this.unCollapseLoginAndCreateAccountLinks();
    };


    this.unCollapseLoginAndCreateAccountLinks = function(){
        this.rr.unCollapse(ui.loginAndCreateAccountLinks);
    };


    this.collapseItemsToBeCollapsedWhenLoggedOut = function(){
        this.rr.collapse($('.' + classes.collapseWhenLoggedOut));
    };


    this.makeInvisibleItemsToBeInvisibleWhenLoggedOut = function(){
        this.rr.makeInvisible($('.' + classes.invisibleWhenLoggedOut));
    };


    this.makeVisibleItemsToBeVisibleWhenLoggedOut = function(){

    };


    this.setLoggedOutHeader = function(){
        ui.appNameHolder.addClass(classes.welcomeToAppName);
        eGetterSetter.setWelcomeAppNameHeader();
    };


    this.setLoggedInHeader = function(){
        ui.appNameHolder.removeClass(classes.welcomeToAppName);
        eGetterSetter.setAppNameHeader();
    };


    this.removeItem = function(obj){
        obj.remove();
    };


    this.removeUnnecessaryItemsWhenLoggedOut = function(){
        this.collapseItemsToBeCollapsedWhenLoggedOut();
        this.makeInvisibleItemsToBeInvisibleWhenLoggedOut();
    };


    this.showNecessaryItemsWhenLoggedOut = function(){
        this.unCollapseItemsToBeUncollapsedWhenLoggedOut();
        this.makeVisibleItemsToBeVisibleWhenLoggedOut();
        this.setLoggedOutHeader();
    };


    this.showLoggedOutContent = function(){
        this.removeUnnecessaryItemsWhenLoggedOut();
        this.showNecessaryItemsWhenLoggedOut();
    };


}
