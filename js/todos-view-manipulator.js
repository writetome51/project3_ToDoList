

function TodosViewManipulator(ui, model){


    this.makeThisItemTheClickedItem = function(obj){
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
        this.makePencilGlyphVisible(ui.clickedItem);
    };


    this.makeGlyphsInvisible = function(){
        this.makeRemoveGlyphInvisible(ui.clickedItem);
        this.makePencilGlyphInvisible(ui.clickedItem);
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
            this.showNecessaryItemsWhenLoggedOut();
            this.removeUnnecessaryItemsWhenLoggedOut();
            this.setLoggedOutHeader();
        }

        else if (model.loggedIn()){
            this.showNecessaryItemsWhenLoggedIn();
            this.removeUnnecessaryItemsWhenLoggedIn();
            this.setLoggedInHeader();
        }
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
        $('#logout-link-container').removeClass(ui.invisibleCollapsedClass);
        $('#dropdown-menus').removeClass(ui.invisibleClass);
        ui.newListItemForm.removeClass(ui.invisibleCollapsedClass);
        ui.navbarSearchContainer.removeClass(ui.invisibleCollapsedClass);
    };


    this.showNecessaryItemsWhenLoggedOut = function(){
        $('#login-and-create-account').removeClass(ui.invisibleCollapsedClass);
    };


    this.removeUnnecessaryItemsWhenLoggedIn = function(){
        $('#login-and-create-account').addClass(ui.invisibleCollapsedClass);
    };


    this.removeUnnecessaryItemsWhenLoggedOut = function(){
        $('#logout-link-container').addClass(ui.invisibleCollapsedClass);
        $('#dropdown-menus').addClass(ui.invisibleClass);
        ui.newListItemForm.addClass(ui.invisibleCollapsedClass);
        ui.navbarSearchContainer.addClass(ui.invisibleCollapsedClass);
    };


    this.setLoggedOutHeader = function(){
        ui.appNameHolder.addClass('welcome-to-app-name');
        $('#app-name').text('Welcome to ' + ui.appNameForDisplay);
    };


    this.setLoggedInHeader = function(){
        ui.appNameHolder.removeClass('welcome-to-app-name');
        $('#app-name').text(ui.appNameForDisplay);
    };


    this.newUserInputsValidated = function(){
        var username = ui.newUsernameInput.val();
        var password1 = ui.newPasswordInput.val();
        var password2 = ui.newPassword2Input.val();
        return (model.newAccountInfoValid(username, password1, password2));
    };



}
