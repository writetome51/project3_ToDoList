function TodosUI(){

    this.appNameForDisplay = 'To-Do\'s';
    this.appNameHeader = $('#app-name');
    this.appNameHolder = $('#app-name-holder');
    this.addButton = $('#add-button');
    this.accountCreationUnsuccessful = $('#account-creation-unsuccessful');
    this.clickedItem = false;
    this.clickedClass = 'list-item-clicked';
    this.createAccountForm = $('#create-account-form');
    this.dropdownMenus = $('#dropdown-menus');
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
    this.loginUsername = $('#login-username');
    this.loginPassword = $('#login-password');
    this.loginLink = $('#login-link');
    this.logoutLink = $('#logout-link');
    this.listsMenu = $('#lists-menu');
    this.listMenuItems = $('#list-names');
    this.listMenuItem = $('.list-menu-item');
    this.newItem = '';
    this.newUsernameInput = $('#create-account-username');
    this.newPasswordInput = $('#create-account-password');
    this.newPassword2Input = $('#create-account-password-2');
    this.newListItemForm = $('#new-list-item-form');
    this.newListForm = $('#new-list-form');
    this.navbarSearchContainer = $('#navbar-search-container');
    this.newListAction = $('#new-list-action');
    this.removeGlyphiconClass = 'glyphicon-remove-circle';
    this.removeGlyph = $('.' + this.removeGlyphiconClass);
    this.todoCheckbox = $('.' + this.itemCheckboxClass);

    this.newListItem = "<li class='" + this.listItemClass + "'  draggable='true'>" +
        "<input type='checkbox' class='" + this.itemCheckboxClass + "'  " +
        "title='Check box to mark item done, or to perform action on item'>" +
        "<span class='" + this.highlightClass + "'> <span class='" +
        this.itemTextClass + "'>" + this.newItem + "</span><span " +
        "class='glyphicon " + this.removeGlyphiconClass + "  " +
        this.invisibleClass + "'></span></span></li>";


}
