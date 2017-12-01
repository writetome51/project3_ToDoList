function TodosUI(classes){

    this.appNameForDisplay = 'To-Do\'s';
    this.appNameHeader = $('#app-name');
    this.appNameHolder = $('#app-name-holder');
    this.addButton = $('#add-button');
    this.accountCreationUnsuccessful = $('#account-creation-unsuccessful');
    this.atLoginSection = false;
    this.clickedItem = false;
    this.createAccountForm = $('#create-account-form');
    this.dropdownMenus = $('#dropdown-menus');
    this.itemText = $('.' + classes.itemTextClass);
    this.itemToHighlight = '';
    this.loginAndCreateAccountLinks = $('#login-and-create-account');
    this.loginForm = $('#login-form');
    this.loginUsername = $('#login-username');
    this.loginPassword = $('#login-password');
    this.loginLink = $('#login-link');
    this.logoutLink = $('#logout-link');
    this.listsMenu = $('#lists-menu');
    this.listMenuItems = $('#list-names');
    this.listMenuItem = false; // at page load, they can't be accessed.
    this.listNameHeader = $('#list-name-header');
    this.newItem = '';
    this.newUsernameInput = $('#create-account-username');
    this.newPasswordInput = $('#create-account-password');
    this.newPassword2Input = $('#create-account-password-2');
    this.newListItemForm = $('#new-list-item-form');
    this.newListForm = $('#new-list-form');
    this.newListName = $('#new-list-name');
    this.navbarSearchContainer = $('#navbar-search-container');
    this.newListAction = $('#new-list-action');
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
