// This class is for manipulating any data found in the view.

function ViewModel(){

    var appNameForDisplay = 'To-Do\'s';
    var appNameHolder = $('#app-name-holder');
    var addButton = $('#add-button');
    var accountCreationUnsuccessful = $('#account-creation-unsuccessful');
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
}
