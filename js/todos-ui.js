function TodosUI(){

    var classes = new TodosCssClasses();
    var ids = new TodosIDs();

    this.appNameForDisplay = 'To-Do\'s';
    this.appNameHeader = $('#' + ids.appNameHeader);
    this.appNameHolder = $('#' + ids.appNameHolder);
    this.addButton = $('#' + ids.addButton);
    this.accountCreationUnsuccessful = $('#' + ids.creationUnsuccessful);
    this.atLoginSection = false;
    this.clickedItem = false;
    this.createAccountForm = $('#' + ids.createAccountForm);
    this.dropdownMenus = $('#' + ids.dropdownMenus);
    this.itemText = $('.' + classes.itemTextClass);
    this.itemToHighlight = '';
    this.loginAndCreateAccountLinks = $('#' + ids.loginAndCreateAccount);
    this.loginForm = $('#' + ids.loginForm);
    this.loginUsername = $('#' + ids.loginUsername);
    this.loginPassword = $('#' + ids.loginPassword);
    this.loginLink = $('#' + ids.loginLink);
    this.logoutLink = $('#' + ids.logoutLink);
    this.listsMenu = $('#' + ids.listsMenu);
    this.listMenuItems = $('#' + ids.listNames);
    this.listMenuItem = false; // at page load, they can't be accessed.
    this.listNameHeader = $('#' + ids.listNameHeader);
    this.newItem = '';
    this.newUsernameInput = $('#' + ids.newUsernameInput);
    this.newPasswordInput = $('#' + ids.createAccountPassword);
    this.newPassword2Input = $('#' + ids.createAccountPassword2);
    this.newListItemForm = $('#' + ids.newListItemForm);
    this.newListForm = $('#' + ids.newListForm);
    this.newListName = $('#' + ids.newListName);
    this.navbarSearchContainer = $('#' + ids.navbarSearchContainer);
    this.newListAction = $('#' + ids.newListAction);
    this.removeGlyph = $('.' + classes.removeGlyphiconClass);
    this.todoCheckbox = $('.' + classes.itemCheckboxClass);

    this.newListItem = "<li class='" + classes.listItemClass + "'  draggable='true'>" +
        "<input type='checkbox' class='" + classes.itemCheckboxClass + "'  " +
        "title='Check box to mark item done, or to perform action on item'>" +
        "<span class='" + classes.highlightClass + "'> <span class='" +
        classes.itemTextClass + "'>" + this.newItem + "</span><span " +
        "class='glyphicon " + classes.removeGlyphiconClass + "  " +
        classes.invisibleClass + "'></span></span></li>";


}
