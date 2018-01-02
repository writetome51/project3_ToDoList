

function UIManipulator(ui){

    var classes = new CSSClasses();

    var rr = new ElementRemoverRevealer(ui, classes);
    var eGetterSetter = new ElementTextGetterSetter(ui, classes);
    var state = new UIStyleState(ui, classes);

    this.createListsMenuItems = function(items){
        eGetterSetter.createListsMenuItems(items);
    };


    this.undoClickedItem = function(){
        if (state.thereIsAClickedItem()){
            this.turnOffClickedBehavior();
        }
        ui.clickedItem = false;
    };


    this.showAccountCreationUnsuccessful = function(){
        rr.unCollapse(ui.accountCreationUnsuccessful);
    };


    this.addNewItemToListOnscreen = function(){
        eGetterSetter.setNewItemText();
        this.displayNewItemInList();
    };


    this.displayNewItemInList = function(){
        ui.todoList.append(ui.newListItem);
    };


	this.turnOffClickedBehavior = function(){
		this.removeClickedClass();
 		rr.makeGlyphsInvisible();
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


    this.makeItemEditable = function(obj){
        var currentItemText = obj.children('.' + classes.itemText);
        currentItemText.attr("contenteditable", "true");
    };


    this.makeItemNotEditable = function(){
        ui.clickedItem.children('.' + classes.itemText)
        .removeAttr('contenteditable');
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


    this.getEntireListItem = function(removeGlyph){
        return removeGlyph.closest('.' + classes.listItem);
    };


    this.showListsMenuItems = function(){
        rr.unCollapse( ui.listsMenuItem);
    };


    this.setListsMenuItem = function(){
        ui.listsMenuItem = $('.' + classes.listsMenuItem);
    };


    this.setListNameHeader = function(listName){
        eGetterSetter.setListNameHeader(listName);
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


    this.showNecessaryItemsWhenCreatingList = function () {
        rr.unCollapse( $('.show-when-creating-list') );
        rr.makeVisible(  $('.show-when-creating-list') );
        eGetterSetter.emptyNewListNameInput();
    };


    this.removeUnnecessaryItemsWhenLoggedIn = function(){
        rr.collapse( $('.' + classes.collapseWhenLoggedIn) );
        rr.makeInvisible( $('.' + classes.invisibleWhenLoggedIn) );
    };


    this.collapseUnnecessaryItemsWhenCreatingList = function(){
        rr.collapse( $('.collapse-when-creating-list') );
    };


    this.unCollapseItemsToBeUncollapsedWhenLoggedOut =  function(){
        this.unCollapseLoginAndCreateAccountLinks();
    };


    this.unCollapseLoginAndCreateAccountLinks = function(){
        rr.unCollapse(ui.loginAndCreateAccountLinks);
    };


    this.collapseItemsToBeCollapsedWhenLoggedOut = function(){
        rr.collapse($('.' + classes.collapseWhenLoggedOut));
    };


    this.makeInvisibleItemsToBeInvisibleWhenLoggedOut = function(){
        rr.makeInvisible($('.' + classes.invisibleWhenLoggedOut));
    };


    this.makeVisibleItemsToBeVisibleWhenLoggedOut = function(){

    };


    this.uncollapseItemsToBeUncollapsedWhenLoggedIn = function(){
        rr.unCollapse( $('.' + classes.collapseWhenLoggedOut) );
    };


    this.makeVisibleItemsToBeVisibleWhenLoggedIn = function(){
        rr.makeVisible( $('.' + classes.invisibleWhenLoggedOut) );
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



}
