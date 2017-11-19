// This class is for manipulating any data found in the view.

function TodosViewModel(){

    this.appNameForDisplay = 'To-Do\'s';
    this.appNameHolder = $('#app-name-holder');
    this.addButton = $('#add-button');
    this.accountCreationUnsuccessful = $('#account-creation-unsuccessful');
    this.clickedItem = false;
    this.clickedClass = 'list-item-clicked';
    this.createAccountSubmit = $('#create-account-submit');
    this.createAccountForm = $('#create-account-form');
    this.hoveredClass = 'list-item-hovered';
    this.highlightClass = 'highlight-area';
    this.itemCheckboxClass = 'todo-checkbox';
    this.invisibleClass = 'invisible';
    this.invisibleCollapsedClass = 'invisible-and-collapsed';
    this.itemTextClass = 'item-text';
    this.itemText = $('.' + this.itemTextClass);
    this.itemToHighlight = '';
    this.listItemClass = 'todo-list-item';
    this.loginForm = $('#login-form');
    this.loginSubmit = $('#login-submit');
    this.loginLink = $('#login-link');
    this.logoutLink = $('#logout-link');
    this.listMenuItem = $('.list-menu-item');
    this.newUsernameInput = $('#create-account-username');
    this.newPasswordInput = $('#create-account-password');
    this.newPassword2Input = $('#create-account-password-2');
    this.newListItemForm = $('#new-list-item-form');
    this.navbarSearchContainer = $('#navbar-search-container');
    this.newListAction = $('#new-list-action');
    this.pencilGlyphiconClass = 'glyphicon-pencil';
    this.removeGlyphiconClass = 'glyphicon-remove-circle';
    this.removeGlyph = $('.' + this.removeGlyphiconClass);
    this.todoCheckbox = $('.' + this.itemCheckboxClass);


    this.undoClickedItem = function(){
        if (this.thereIsAClickedItem()){
            this.clickedItem.removeClass(this.clickedClass);
            this.makeGlyphsInvisible();
            this.makeItemNotEditable(this.clickedItem);
        }
        this.clickedItem = false;
    };



    this.makeThisItemTheClickedItem = function(obj){
        this.itemToHighlight = obj.parent('.' + this.highlightClass);
        this.undoClickedItem();
        this.setClickedItem(this.itemToHighlight);
    };


    this.setClickedItem = function(obj){
        this.clickedItem = obj;
        this.removeHoverClassAndAddClickedClass(this.clickedItem);
        this.makeGlyphsVisible();
        this.makeItemEditable(this.clickedItem);
    };


    this.listItemIsAlreadyClicked = function(obj){
        this.itemToHighlight = obj.parent('.' + this.highlightClass);
        return this.thisItemIsAlreadyClicked(this.itemToHighlight);
    };


    this.listItemIsNotClicked = function(obj){
        return  ( ! this.listItemIsAlreadyClicked(obj));
    };


    this.thisItemIsAlreadyClicked = function(obj){
        return  obj.hasClass(this.clickedClass);
    };


    this.makeGlyphsVisible = function(){
        this.makeRemoveGlyphVisible(this.clickedItem);
        this.makePencilGlyphVisible(this.clickedItem);
    };


    this.makeGlyphsInvisible = function(){
        makeRemoveGlyphInvisible(this.clickedItem);
        makePencilGlyphInvisible(this.clickedItem);
    };


    this.makeRemoveGlyphVisible = function(obj){
        obj.find('.' + removeGlyphiconClass).removeClass(this.invisibleClass);
    };


    this.makeRemoveGlyphInvisible = function(obj){
        obj.find('.' + removeGlyphiconClass).addClass(this.invisibleClass);
    };


    this.makePencilGlyphInvisible = function(obj){
        obj.find('.' + pencilGlyphiconClass).addClass(this.invisibleClass);
    };


    this.makePencilGlyphVisible = function(obj){
        obj.find('.' + pencilGlyphiconClass).removeClass(this.invisibleClass);
    };


    this.makeItemEditable = function(obj){
        var currentItemText = obj.children('.' + itemTextClass);
        currentItemText.attr("contenteditable", "true");

        textBeingEdited = currentItemText.text();
    };


    this.makeItemNotEditable = function(obj){
        obj.children('.' + itemTextClass).removeAttr('contenteditable');
    };


    this.thereIsAClickedItem = function(){
        if (this.clickedItem){ return true; }
        else { return false; }
    };


    this.removeHoverClassAndAddClickedClass = function(obj){
        obj.addClass(this.clickedClass);
        obj.removeClass(this.hoveredClass);
    };


    this.addHoveredClassToListItem = function(obj){
        itemToHighlight = obj.parent('.' + this.highlightClass);
        itemToHighlight.addClass(this.hoveredClass);
    };


    this.removeHoveredClassFromListItem = function(obj){
        itemToHighlight = obj.parent('.' + this.highlightClass);
        itemToHighlight.removeClass(this.hoveredClass);
    };


    this.clickedItemCheckboxIsChecked = function(){
        return this.clickedItem.children('.' + this.itemCheckboxClass).prop('checked');
    };


    this.removeListItem = function(item){
        item.parents('.' + listItemClass).remove();
    };


    this.setAppearance = function(){

        if (notLoggedIn()){
            showNecessaryItemsWhenLoggedOut();
            removeUnnecessaryItemsWhenLoggedOut();
            setLoggedOutHeader();
        }

        else if (loggedIn()){
            showNecessaryItemsWhenLoggedIn();
            removeUnnecessaryItemsWhenLoggedIn();
            setLoggedInHeader();
        }
    };


    this.showNecessaryItemsWhenLoggedIn = function(){
        $('#logout-link-container').removeClass(this.invisibleCollapsedClass);
        $('#dropdown-menus').removeClass(this.invisibleClass);
        newListItemForm.removeClass(this.invisibleCollapsedClass);
        navbarSearchContainer.removeClass(this.invisibleCollapsedClass);
    };


    this.showNecessaryItemsWhenLoggedOut = function(){
        $('#login-and-create-account').removeClass(this.invisibleCollapsedClass);
    };


    this.removeUnnecessaryItemsWhenLoggedIn = function(){
        $('#login-and-create-account').addClass(this.invisibleCollapsedClass);
    };


    this.removeUnnecessaryItemsWhenLoggedOut = function(){
        $('#logout-link-container').addClass(this.invisibleCollapsedClass);
        $('#dropdown-menus').addClass(this.invisibleClass);
        newListItemForm.addClass(this.invisibleCollapsedClass);
        navbarSearchContainer.addClass(this.invisibleCollapsedClass);
    };


    this.setLoggedOutHeader = function(){
        this.appNameHolder.addClass('welcome-to-app-name');
        $('#app-name').text('Welcome to ' + this.appNameForDisplay);
    };


    this.setLoggedInHeader = function(){
        this.appNameHolder.removeClass('welcome-to-app-name');
        $('#app-name').text(this.appNameForDisplay);
    };


}
