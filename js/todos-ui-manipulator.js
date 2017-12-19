

function TodosUIManipulator(ui){

    var classes = new TodosCSSClasses();
    this.noListsFound = 'No Lists';



    this.createListsMenuItems = function(items){
        var listItemsHTML = this.createListsMenuItemsHTML(items);
        ui.listsMenuItems.html(listItemsHTML);
    };


    this.createListsMenuItemsHTML = function(items){
        if (items === []){
            return '<li id="no-lists-found">' + this.noListsFound  + '</li>';
        }
        for (var item=0, html='';  item < items.length;  ++item){
            html += '<li><a class="list-menu-item">' + items[item]  + '</a></li>';
        }
        return html;
    };


    this.showAccountCreationUnsuccessful = function(){
        this.unCollapse(ui.accountCreationUnsuccessful);
    };


    this.getLoginValues = function(){
        var values = {};
        values.username = ui.loginUsername.val();
        values.password = ui.loginPassword.val();
        return values;
    };


    this.getNewListName = function(){
        return ui.newListName.val();
    };


    this.addNewItemToListOnscreen = function(){
        this.setNewItemText();
        this.displayNewItemInList();
    };


    this.setNewItemText = function(){
        ui.newItemText = ui.newListItemTextInput.val();
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


    this.makeGlyphsVisible = function(){
        this.makeRemoveGlyphVisible(ui.clickedItem);
    };


    this.makeGlyphsInvisible = function(){
        this.makeRemoveGlyphInvisible(ui.clickedItem);
    };


    this.makeRemoveGlyphVisible = function(obj){
        this.makeVisible( obj.find('.' + classes.removeGlyphicon) );
    };


    this.makeRemoveGlyphInvisible = function(obj){
        this.makeInvisible( obj.find('.' + classes.removeGlyphicon) );
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


    this.getItemText = function(listItem){
        return listItem.find('.' + classes.itemText).text();
    };


    this.getNewAccountValues = function(){
        var values = {};
        values.username = ui.newUsernameInput.val();
        values.password1 = ui.newPasswordInput.val();
        values.password2 = ui.newPassword2Input.val();
        return values;
    };


    this.showContentNotSeenWhenLoggedOut = function(){
        this.unCollapse( $('.' + classes.collapseWhenLoggedOut) );
        this.makeVisible( $('.' + classes.invisibleWhenLoggedOut) );
    };


    this.showListsMenuItems = function(){
        this.unCollapse( ui.listsMenuItem);
    };


    this.setListsMenuItem = function(){
        ui.listsMenuItem = $('.' + classes.listsMenuItem);
    };


    this.setListNameHeader = function(listName){
        ui.listNameHeader.text(listName);
    };


    this.collapseItemsShownWhenCreatingList = function(){
        this.collapse($('.show-when-creating-list'));
    };


    this.makeInvisibleItemsVisibleWhenCreatingList = function(){

    };


    this.collapse = function(obj){
        obj.addClass(classes.invisibleCollapsed);
    };


    this.unCollapse = function(obj){
        obj.removeClass(classes.invisibleCollapsed);
    };


    this.makeInvisible = function(obj){
        obj.addClass(classes.invisible);
    };


    this.makeVisible = function(obj){
        obj.removeClass(classes.invisible);
    };


    this.showNecessaryItemsWhenNotCreatingList = function(){
        this.unCollapse( $('.collapse-when-creating-list') );
        this.makeVisible( $('.invisible-when-creating-list') );
    };


    this.showNecessaryItemsWhenCreatingList = function () {
        this.unCollapse( $('.show-when-creating-list') );
        this.makeVisible(  $('.show-when-creating-list') );
        this.emptyNewListNameInput();
    };


    this.removeUnnecessaryItemsWhenLoggedIn = function(){
        this.collapse( $('.' + classes.collapseWhenLoggedIn) );
        this.makeInvisible( $('.' + classes.invisibleWhenLoggedIn) );
    };



    this.collapseUnnecessaryItemsWhenCreatingList = function(){
        this.collapse( $('.collapse-when-creating-list') );
    };


    this.unCollapseLoginAndCreateAccountLinks = function(){
        this.unCollapse(ui.loginAndCreateAccountLinks);
    };


    this.collapseItemsToBeCollapsedWhenLoggedOut = function(){
        this.collapse($('.' + classes.collapseWhenLoggedOut));
    };


    this.makeInvisibleItemsToBeInvisibleWhenLoggedOut = function(){
        this.makeInvisible($('.' + classes.invisibleWhenLoggedOut));
    };


    this.setLoggedOutHeader = function(){
        ui.appNameHolder.addClass(classes.welcomeToAppName);
        ui.appNameHeader.text('Welcome to ' + ui.appNameForDisplay);
    };


    this.setLoggedInHeader = function(){
        ui.appNameHolder.removeClass(classes.welcomeToAppName);
        ui.appNameHeader.text(ui.appNameForDisplay);
    };


    this.removeItem = function(obj){
        obj.remove();
    };


    this.emptyNewListNameInput = function(){
        ui.newListName.val('');
    }



}
