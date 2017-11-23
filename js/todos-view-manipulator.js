

function TodosViewManipulator(ui, model){


    this.fillListsMenuWithItems = function(){
       var innerHTML =  model.getAllListsMenuItems();
       ui.listMenuItems.html(innerHTML);
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


    this.removeListItem = function(item){
        item.parents('.' + ui.listItemClass).remove();
    };


    this.setAppearance = function(){
        if (model.notLoggedIn()){
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
            this.showNecessaryItemsWhenCreatingList();
            this.removeUnnecessaryItemsWhenCreatingList();
        }
    };


    this.showNecessaryItemsWhenCreatingList = function(){
        $('.show-when-creating-list')
            .removeClass(ui.invisibleCollapsedClass + ' ' + ui.invisibleClass );
    };


    this.removeUnnecessaryItemsWhenCreatingList = function(){
        $('.remove-when-creating-list')
            .addClass(ui.invisibleCollapsedClass);
    };


    this.showNecessaryItemsWhenLoggedOut = function(){
        $('#login-and-create-account').removeClass(ui.invisibleCollapsedClass);
    };


    this.removeUnnecessaryItemsWhenLoggedIn = function(){
        $('#login-section').addClass(ui.invisibleCollapsedClass);
        $('#login-and-create-account').addClass(ui.invisibleCollapsedClass);
    };


    this.removeUnnecessaryItemsWhenLoggedOut = function(){
        $('#logout-link-container').addClass(ui.invisibleCollapsedClass);
        ui.dropdownMenus.addClass(ui.invisibleClass);
        ui.newListItemForm.addClass(ui.invisibleCollapsedClass);
        ui.navbarSearchContainer.addClass(ui.invisibleCollapsedClass);
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
        var username = ui.newUsernameInput.val();
        var password1 = ui.newPasswordInput.val();
        var password2 = ui.newPassword2Input.val();
        return (model.newAccountInfoValid(username, password1, password2));
    };



}
