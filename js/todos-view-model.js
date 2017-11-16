// This class is for manipulating any data found in the view.

function TodosViewModel(){

    var appNameForDisplay = 'To-Do\'s';
    var appNameHolder = $('#app-name-holder');
    var addButton = $('#add-button');
    var accountCreationUnsuccessful = $('#account-creation-unsuccessful');
    var clickedItem = false;
    var clickedClass = 'list-item-clicked';
    var createAccountSubmit = $('#create-account-submit');
    var createAccountForm = $('#create-account-form');
    var hoveredClass = 'list-item-hovered';
    var highlightClass = 'highlight-area';
    var itemCheckboxClass = 'todo-checkbox';
    var invisibleClass = 'invisible';
    var invisibleCollapsedClass = 'invisible-and-collapsed';
    var itemTextClass = 'item-text';
    var itemText = $('.' + itemTextClass);
    var itemToHighlight = '';
    var listItemClass = 'todo-list-item';
    var loginForm = $('#login-form');
    var loginSubmit = $('#login-submit');
    var loginLink = $('#login-link');
    var logoutLink = $('#logout-link');
    var listMenuItem = $('.list-menu-item');
    var newUsernameInput = $('#create-account-username');
    var newPasswordInput = $('#create-account-password');
    var newPassword2Input = $('#create-account-password-2');
    var newListItemForm = $('#new-list-item-form');
    var navbarSearchContainer = $('#navbar-search-container');
    var newListAction = $('#new-list-action');
    var pencilGlyphiconClass = 'glyphicon-pencil';
    var removeGlyphiconClass = 'glyphicon-remove-circle';
    var removeGlyph = $('.' + removeGlyphiconClass);
    var todoCheckbox = $('.' + itemCheckboxClass);


    function undoClickedItem(){
        if (thereIsAClickedItem()){
            clickedItem.removeClass(clickedClass);
            makeGlyphsInvisible();
            makeItemNotEditable(clickedItem);
        }
        clickedItem = false;
    }



    function makeThisItemTheClickedItem(obj){
        itemToHighlight = obj.parent('.' + highlightClass);
        undoClickedItem();
        setClickedItem(itemToHighlight);
    }


    function setClickedItem(obj){
        clickedItem = obj;
        removeHoverClassAndAddClickedClass(clickedItem);
        makeGlyphsVisible();
        makeItemEditable(clickedItem);
    }


    function listItemIsAlreadyClicked(obj){
        itemToHighlight = obj.parent('.' + highlightClass);
        return thisItemIsAlreadyClicked(itemToHighlight);
    }


    function listItemIsNotClicked(obj){
        return  ( ! listItemIsAlreadyClicked(obj));
    }


    function thisItemIsAlreadyClicked(obj){
        return  obj.hasClass(clickedClass);
    }


    function makeGlyphsVisible(){
        makeRemoveGlyphVisible(clickedItem);
        makePencilGlyphVisible(clickedItem);
    }


    function makeGlyphsInvisible(){
        makeRemoveGlyphInvisible(clickedItem);
        makePencilGlyphInvisible(clickedItem);
    }


    function makeRemoveGlyphVisible(obj){
        obj.find('.' + removeGlyphiconClass).removeClass(invisibleClass);
    }


    function makeRemoveGlyphInvisible(obj){
        obj.find('.' + removeGlyphiconClass).addClass(invisibleClass);
    }


    function makePencilGlyphInvisible(obj){
        obj.find('.' + pencilGlyphiconClass).addClass(invisibleClass);
    }


    function makePencilGlyphVisible(obj){
        obj.find('.' + pencilGlyphiconClass).removeClass(invisibleClass);
    }


    function makeItemEditable(obj){
        var currentItemText = obj.children('.' + itemTextClass);
        currentItemText.attr("contenteditable", "true");

        textBeingEdited = currentItemText.text();
    }


    function makeItemNotEditable(obj){
        obj.children('.' + itemTextClass).removeAttr('contenteditable');
    }


    function thereIsAClickedItem(){
        if (clickedItem){ return true; }
        else { return false; }
    }


    function removeHoverClassAndAddClickedClass(obj){
        obj.addClass(clickedClass);
        obj.removeClass(hoveredClass);
    }


    function addHoveredClassToListItem(obj){
        itemToHighlight = obj.parent('.' + highlightClass);
        itemToHighlight.addClass(hoveredClass);
    }


    function removeHoveredClassFromListItem(obj){
        itemToHighlight = obj.parent('.' + highlightClass);
        itemToHighlight.removeClass(hoveredClass);
    }


    function clickedItemCheckboxIsChecked(){
        return clickedItem.children('.' + itemCheckboxClass).prop('checked');
    }


    function removeListItem(item){
        item.parents('.' + listItemClass).remove();
    }


    function setAppearance(){

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
    }


    function showNecessaryItemsWhenLoggedIn(){
        $('#logout-link-container').removeClass(invisibleCollapsedClass);
        $('#dropdown-menus').removeClass(invisibleClass);
        newListItemForm.removeClass(invisibleCollapsedClass);
        navbarSearchContainer.removeClass(invisibleCollapsedClass);
    }


    function showNecessaryItemsWhenLoggedOut(){
        $('#login-and-create-account').removeClass(invisibleCollapsedClass);
    }


    function removeUnnecessaryItemsWhenLoggedIn(){
        $('#login-and-create-account').addClass(invisibleCollapsedClass);
    }


    function removeUnnecessaryItemsWhenLoggedOut(){
        $('#logout-link-container').addClass(invisibleCollapsedClass);
        $('#dropdown-menus').addClass(invisibleClass);
        newListItemForm.addClass(invisibleCollapsedClass);
        navbarSearchContainer.addClass(invisibleCollapsedClass);
    }


    function setLoggedOutHeader(){
        appNameHolder.addClass('welcome-to-app-name');
        $('#app-name').text('Welcome to ' + appNameForDisplay);
    }


    function setLoggedInHeader(){
        appNameHolder.removeClass('welcome-to-app-name');
        $('#app-name').text(appNameForDisplay);
    }


}
