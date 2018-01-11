function DOM(){

    var classes = new CSSClasses();
    var ids = new IDs();

    this.appNameForDisplay = 'To-Do\'s';
    this.appNameHeader = $('#' + ids.appNameHeader);
    this.appNameHolder = $('#' + ids.appNameHolder);
    this.addButton = $('#' + ids.addButton);
    this.accountCreationUnsuccessful = $('#' + ids.creationUnsuccessful);
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
    this.listsMenuItems = $('#' + ids.listNames);
    this.listsMenuItem = false; // at page load, they can't be accessed.
    this.listNameHeader = $('#' + ids.listNameHeader);
    this.newListItem = '';
    this.newItemText = '';
    this.newListItemTextInput = $('#' + ids.newItemTextInput);
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
    this.todoList = $('.' + classes.todoList);





}
