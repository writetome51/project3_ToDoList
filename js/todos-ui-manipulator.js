

function TodosUIManipulator(ui, model){

    var classes = new TodosCSSClasses();

    this.creatingNewList = false;


    this.refreshListsMenu = function(){
        this.refreshListsMenuContent();
        this.refreshListsMenuBehavior();
    };


    this.refreshListsMenuContent = function(){
        var innerHTML =  model.getAllListsMenuItems();
        ui.listMenuItems.html(innerHTML);
        ui.listMenuItem = $('.' + classes.listMenuItem);
    };


    this.refreshListsMenuBehavior = function(){
        this.setlistsMenuItemClickHandler(this);
    };


    this.setlistsMenuItemClickHandler = function(me){
        ui.listMenuItem.click(function(){
            me.handleViewingSelectedList( $(this).text() );
        });
    };


    this.handleAccountCreation = function(){
        var u = ui.newUsernameInput.val();
        var p1 = ui.newPasswordInput.val();
        var p2 = ui.newPassword2Input.val();
        if (this.newUserInputsValidated(u, p1, p2)){
            this.createAccountLoginAndRedirectToHome(u, p1, p2);
        }
        else{
            ui.accountCreationUnsuccessful.removeClass(classes.invisibleCollapsed);
        }
    };


    this.handleLogin = function(){
        var username = ui.loginUsername.val();
        var password = ui.loginPassword.val();
        model.login(username, password);
        this.redirectToHome();
    };


    this.handleLogout = function(){
        model.logout();
        this.setAppearance();
    };


    this.saveListItem = function(obj){
        model.saveListItem(obj.text());
        this.setAppearance();
    };


    this.saveNewList = function(){
        var newListName =  ui.newListName.val();
        model.createNewList(newListName);
    };


    this.handleNewListCreation = function(){
        this.saveNewList();
        this.creatingNewList = false;
        this.setAppearance();
    };


    this.addNewListItem = function(){
        $('.todo-list').append(ui.newListItem);
    };


    this.makeClickedItem = function(obj){
        if (this.listItemIsNotClicked(obj)){
            this.undoClickedItem();
            this.setClickedItem(obj);
        }
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



    this.addHoveredClassIfNotClicked = function(obj){
        if (this.listItemIsNotClicked(obj)){
            this.addHoveredClassToListItem(obj);
        }
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
        obj.find('.' + classes.removeGlyphicon).removeClass(classes.invisible);
    };


    this.makeRemoveGlyphInvisible = function(obj){
        obj.find('.' + classes.removeGlyphicon).addClass(classes.invisible);
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
        obj.addClass(classes.clicked);
        obj.removeClass(classes.hovered);
    };


    this.addHoveredClassToListItem = function(obj){
        ui.itemToHighlight = obj.parent('.' + classes.highlight);
        ui.itemToHighlight.addClass(classes.hovered);
    };


    this.removeHoveredClassFromListItem = function(obj){
        ui.itemToHighlight = obj.parent('.' + classes.highlight);
        ui.itemToHighlight.removeClass(classes.hovered);
    };


    this.clickedItemCheckboxIsChecked = function(){
        return ui.clickedItem.children('.' + classes.itemCheckbox).prop('checked');
    };


    this.removeListItem = function(removeGlyph){
        var listItem = this.getEntireListItem(removeGlyph);
        var itemText = this.getItemText(listItem);
        this.removeBoth(listItem, itemText);
    };


    this.removeBoth = function(listItem, itemText){
        listItem.remove();
        model.removeItemFromSavedList(itemText);
    };


    this.getEntireListItem = function(removeGlyph){
        return removeGlyph.closest('.' + classes.listItem);
    };


    this.getItemText = function(listItem){
        return listItem.find('.' + classes.itemText).text();
    };





    this.createAccountLoginAndRedirectToHome = function(username, password){
        model.createAccount(username, password);
        model.login(username, password);
        this.redirectToHome();
    };


    this.redirectToHome = function(){
        location.replace('index.html');
    };



    this.showNecessaryItemsWhenLoggedIn = function(){
        this.setLoggedInHeader();
        this.showContentCollapsedOrInvisibleWhenLoggedOut();
        this.refreshListsMenu();
        this.setListNameHeader();

        if (this.creatingNewList || model.userHasNoLists()){
            this.showNewListForm();
        }
    };


    this.showContentCollapsedOrInvisibleWhenLoggedOut = function(){
        $('.collapse-when-logged-out').removeClass(classes.invisibleCollapsed);
        $('.invisible-when-logged-out').removeClass(classes.invisible);
    };


    this.showNewListForm = function(){
        this.creatingNewList = true;
        this.showNecessaryItemsWhenCreatingList();
        this.removeUnnecessaryItemsWhenCreatingList();
    };


    this.showListsMenuItems = function(){
        ui.listMenuItem.removeClass(classes.invisibleCollapsed);
    };


    this.removeUnnecessaryItemsWhenNotCreatingList = function(){
        if ( ! this.creatingNewList){
            $('.show-when-creating-list').addClass(classes.invisibleCollapsed);
        }
    };


    this.showNecessaryItemsWhenNotCreatingList = function(){
        $('.collapse-when-creating-list')
         .removeClass(classes.invisibleCollapsed);
    };


    this.showNecessaryItemsWhenCreatingList = function(){
        if (this.creatingNewList){
            $('.show-when-creating-list')
             .removeClass(classes.invisibleCollapsed + ' ' + classes.invisible );
        }
        emptyNewListNameInput();
    };


    this.removeUnnecessaryItemsWhenCreatingList = function(){
        $('.collapse-when-creating-list')
            .addClass(classes.invisibleCollapsed);
    };


    this.showNecessaryItemsWhenLoggedOut = function(){
        ui.loginAndCreateAccountLinks.remove(classes.invisibleCollapsed);
    };


    this.removeUnnecessaryItemsWhenLoggedIn = function(){
       $('.collapse-when-logged-in').addClass(classes.invisibleCollapsed);
       $('.invisible-when-logged-in').addClass(classes.invisible);
        if ( ! this.creatingNewList){
            this.removeUnnecessaryItemsWhenNotCreatingList();
        }
        else{
           this.removeUnnecessaryItemsWhenCreatingList();
        }
    };


    this.removeUnnecessaryItemsWhenLoggedOut = function(){
        $('.collapse-when-logged-out').addClass(classes.invisibleCollapsed);
        $('.invisible-when-logged-out').addClass(classes.invisible);
    };


    this.setLoggedOutHeader = function(){
        ui.appNameHolder.addClass('welcome-to-app-name');
        ui.appNameHeader.text('Welcome to ' + ui.appNameForDisplay);
    };


    this.setLoggedInHeader = function(){
        ui.appNameHolder.removeClass('welcome-to-app-name');
        ui.appNameHeader.text(ui.appNameForDisplay);
    };


    this.setListNameHeader = function(){
        var listName = model.getActiveListName();
        if (!listName) listName = 'Choose a list from the Lists menu';
        ui.listNameHeader.text(listName);
    };


    this.newUserInputsValidated = function(u, p1, p2){
        return (model.newAccountInfoValid(u, p1, p2));
    };


    this.setAppearance = function(){
        if (model.loggedOut()){
            this.showLoggedOutContent();
        }
        else if (model.loggedIn()){
            this.showLoggedInContent();
        }
    };


    this.showLoggedOutContent = function(){
        this.removeUnnecessaryItemsWhenLoggedOut();
        this.showNecessaryItemsWhenLoggedOut();
        this.setLoggedOutHeader();
    };


    this.showLoggedInContent = function(){
        this.showNecessaryItemsWhenLoggedIn();
        this.removeUnnecessaryItemsWhenLoggedIn();
    };


    this.handleViewingSelectedList = function(listName){
        model.setActiveList(listName);
        this.setAppearance();
    };



    function emptyNewListNameInput(){
        ui.newListName.val('');
    }



}
