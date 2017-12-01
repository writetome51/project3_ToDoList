

function TodosUIManipulator(ui, model){

    this.creatingNewList = false;


    this.refreshListsMenu = function(){
        this.refreshListsMenuContent();
        this.refreshListsMenuBehavior();
    };


    this.refreshListsMenuContent = function(){
        var innerHTML =  model.getAllListsMenuItems();
        ui.listMenuItems.html(innerHTML);
        ui.listMenuItem = $('.' + ui.listMenuItemClass);
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
            ui.accountCreationUnsuccessful.removeClass(ui.invisibleCollapsedClass);
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
		ui.clickedItem.removeClass(ui.clickedClass);
	};



    this.addHoveredClassIfNotClicked = function(obj){
        if (this.listItemIsNotClicked(obj)){
            this.addHoveredClassToListItem(obj);
        }
    };



    this.setClickedItem = function(obj){
        ui.itemToHighlight = obj.parent('.' + ui.highlightClass);
        ui.clickedItem = ui.itemToHighlight;
        this.removeHoverClassAndAddClickedClass(ui.clickedItem);
        this.makeGlyphsVisible();
        this.makeItemEditable(ui.clickedItem);
    };


    this.listItemIsAlreadyClicked = function(obj){
        ui.itemToHighlight = obj.parent('.' + ui.highlightClass);
        return this.thisItemIsAlreadyClicked(ui.itemToHighlight);
    };


    this.listItemIsNotClicked = function(obj){
        return  ( ! this.listItemIsAlreadyClicked(obj));
    };


    this.thisItemIsAlreadyClicked = function(obj){
        return  obj.hasClass(ui.clickedClass);
    };


    this.makeGlyphsVisible = function(){
        this.makeRemoveGlyphVisible(ui.clickedItem);
    };


    this.makeGlyphsInvisible = function(){
        this.makeRemoveGlyphInvisible(ui.clickedItem);
    };


    this.makeRemoveGlyphVisible = function(obj){
        obj.find('.' + ui.removeGlyphiconClass).removeClass(ui.invisibleClass);
    };


    this.makeRemoveGlyphInvisible = function(obj){
        obj.find('.' + ui.removeGlyphiconClass).addClass(ui.invisibleClass);
    };


    this.makeItemEditable = function(obj){
        var currentItemText = obj.children('.' + ui.itemTextClass);
        currentItemText.attr("contenteditable", "true");
    };


    this.makeItemNotEditable = function(){
        ui.clickedItem.children('.' + ui.itemTextClass)
        .removeAttr('contenteditable');
    };


    this.thereIsAClickedItem = function(){
        if (ui.clickedItem){ return true; }
        else { return false; }
    };


    this.removeHoverClassAndAddClickedClass = function(obj){
        obj.addClass(ui.clickedClass);
        obj.removeClass(ui.hoveredClass);
    };


    this.addHoveredClassToListItem = function(obj){
        ui.itemToHighlight = obj.parent('.' + ui.highlightClass);
        ui.itemToHighlight.addClass(ui.hoveredClass);
    };


    this.removeHoveredClassFromListItem = function(obj){
        ui.itemToHighlight = obj.parent('.' + ui.highlightClass);
        ui.itemToHighlight.removeClass(ui.hoveredClass);
    };


    this.clickedItemCheckboxIsChecked = function(){
        return ui.clickedItem.children('.' + ui.itemCheckboxClass).prop('checked');
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
        return removeGlyph.closest('.' + ui.listItemClass);
    };


    this.getItemText = function(listItem){
        return listItem.find('.' + ui.itemTextClass).text();
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
        $('.collapse-when-logged-out').removeClass(ui.invisibleCollapsedClass);
        $('.invisible-when-logged-out').removeClass(ui.invisibleClass);
    };


    this.showNewListForm = function(){
        this.creatingNewList = true;
        this.showNecessaryItemsWhenCreatingList();
        this.removeUnnecessaryItemsWhenCreatingList();
    };


    this.showListsMenuItems = function(){
        ui.listMenuItem.removeClass(ui.invisibleCollapsedClass);
    };


    this.removeUnnecessaryItemsWhenNotCreatingList = function(){
        if ( ! this.creatingNewList){
            $('.show-when-creating-list').addClass(ui.invisibleCollapsedClass);
        }
    };


    this.showNecessaryItemsWhenNotCreatingList = function(){
        $('.collapse-when-creating-list')
         .removeClass(ui.invisibleCollapsedClass);
    };


    this.showNecessaryItemsWhenCreatingList = function(){
        if (this.creatingNewList){
            $('.show-when-creating-list')
             .removeClass(ui.invisibleCollapsedClass + ' ' + ui.invisibleClass );
        }
        emptyNewListNameInput();
    };


    this.removeUnnecessaryItemsWhenCreatingList = function(){
        $('.collapse-when-creating-list')
            .addClass(ui.invisibleCollapsedClass);
    };


    this.showNecessaryItemsWhenLoggedOut = function(){
        ui.loginAndCreateAccountLinks.removeClass(ui.invisibleCollapsedClass);
    };


    this.removeUnnecessaryItemsWhenLoggedIn = function(){
       $('.collapse-when-logged-in').addClass(ui.invisibleCollapsedClass);
       $('.invisible-when-logged-in').addClass(ui.invisibleClass);
        if ( ! this.creatingNewList){
            this.removeUnnecessaryItemsWhenNotCreatingList();
        }
        else{
           this.removeUnnecessaryItemsWhenCreatingList();
        }
    };


    this.removeUnnecessaryItemsWhenLoggedOut = function(){
        $('.collapse-when-logged-out').addClass(ui.invisibleCollapsedClass);
        $('.invisible-when-logged-out').addClass(ui.invisibleClass);
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
        this.setListNameHeader();
    };



    function emptyNewListNameInput(){
        ui.newListName.val('');
    }





}
