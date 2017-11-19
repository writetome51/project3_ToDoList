function TodosUI(){

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


}
