function TodosUI(){

    var classes = new TodosCSSClasses();
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
    this.itemText = $('.' + classes.itemText);
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
    this.removeGlyph = $('.' + classes.removeGlyphicon);
    this.todoCheckbox = $('.' + classes.itemCheckbox);

    this.newListItem = "<li class='" + classes.listItem + "'  draggable='true'>" +
        "<input type='checkbox' class='" + classes.itemCheckbox + "'  " +
        "title='Check box to mark item done, or to perform action on item'>" +
        "<span class='" + classes.highlight + "'> <span class='" +
        classes.itemText + "'>" + this.newItem + "</span><span " +
        "class='glyphicon " + classes.removeGlyphicon + "  " +
        classes.invisible + "'></span></span></li>";


}
