

function TodosUIManipulator(ui, model){


    this.fillListsMenuWithItems = function(){
       var innerHTML =  model.getAllListsMenuItems();
       ui.listMenuItems.html(innerHTML);
    };


    this.handleAccountCreation = function(){
        if (this.newUserInputsValidated()){
            this.createAccountLoginAndRedirectToHome();
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
    };


    this.saveNewList = function(obj){

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


    this.showLoggedOutContent = function(){
        this.removeUnnecessaryItemsWhenLoggedOut();
        this.showNecessaryItemsWhenLoggedOut();
        this.setLoggedOutHeader();
    };


    this.showLoggedInContent = function(){
        this.showNecessaryItemsWhenLoggedIn();
        this.removeUnnecessaryItemsWhenLoggedIn();
        this.setLoggedInHeader();
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
        $('#main-home-navbar').removeClass(ui.invisibleCollapsedClass);
        $('#todos-body').removeClass(ui.invisibleCollapsedClass);
        $('#logout-link-container').removeClass(ui.invisibleCollapsedClass);
        ui.dropdownMenus.removeClass(ui.invisibleClass);

        /*** Only show this if there is an active list:
        if (){
            ui.newListItemForm.removeClass(ui.invisibleCollapsedClass);
        }
        ***/
        this.ifUserHasNoListsShowListCreateForm();
        ui.navbarSearchContainer.removeClass(ui.invisibleCollapsedClass);
    };


    this.ifUserHasNoListsShowListCreateForm = function(){
        if (model.userHasNoLists()){
           this.showNewListForm();
        }
    };


    this.showNewListForm = function(){
        this.showNecessaryItemsWhenCreatingList();
        this.removeUnnecessaryItemsWhenCreatingList();
    };


    this.showNecessaryItemsWhenCreatingList = function(){
        $('.show-when-creating-list')
            .removeClass(ui.invisibleCollapsedClass + ' ' + ui.invisibleClass );
    };


    this.removeUnnecessaryItemsWhenCreatingList = function(){
        $('.collapse-when-creating-list')
            .addClass(ui.invisibleCollapsedClass);
    };


    this.showNecessaryItemsWhenLoggedOut = function(){
        ui.loginAndCreateAccountLinks.removeClass(ui.invisibleCollapsedClass);
    };


    this.removeUnnecessaryItemsWhenLoggedIn = function(){
        ui.loginAndCreateAccountLinks.addClass(ui.invisibleCollapsedClass);
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


    this.newUserInputsValidated = function(){
        var u = ui.newUsernameInput.val();
        var p1 = ui.newPasswordInput.val();
        var p2 = ui.newPassword2Input.val();
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


}
