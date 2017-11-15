
var appName = 'todosApp';
var appNameForDisplay = 'To-Do\'s';
var appNameHolder = $('#app-name-holder');
var appData = '';
var activeList = false;
var addButton = $('#add-button');
var accountCreationUnsuccessful = $('#account-creation-unsuccessful');
var clickedClass = 'list-item-clicked';
var clickedItem = false;
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
var loggedInUser = false;
var newUsernameInput = $('#create-account-username');
var newPasswordInput = $('#create-account-password');
var newPassword2Input = $('#create-account-password-2');
var newListItemForm = $('#new-list-item-form');
var navbarSearchContainer = $('#navbar-search-container');
var newListAction = $('#new-list-action');
var pencilGlyphiconClass = 'glyphicon-pencil';
var removeGlyphiconClass = 'glyphicon-remove-circle';
var removeGlyph = $('.' + removeGlyphiconClass);
var sessionKeyLoggedInUser = appName + '_loggedInUser';
var sessionKeyActiveList = appName + '_activeList';
var localKeyUserPrefix = appName + '_user_'; // Each user gets its own key, preceded by this prefix.
var sessionData = false;
var textBeingEdited = false;
var todoCheckbox = $('.' + itemCheckboxClass);



setAppearance();


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




function createAccount(username, password){
    var data = {password:password, lists:{}};
    var userKey = localKeyUserPrefix + username;

    localStorage.setItem(userKey, JSON.stringify(data));
}


function login(username, password){
    loggedInUser = username;
    sessionStorage.setItem(sessionKeyLoggedInUser, loggedInUser);
}


function logout(){
    sessionStorage.removeItem(sessionKeyLoggedInUser);
    sessionData = false;
}


function createNewList(username, listName){
    var userKey = localKeyUserPrefix + username;
    var listsBeingModified = getUsersLists(userKey);
    listsBeingModified[listName] = [];
    modifyLocalStorage(userKey, {lists:listsBeingModified});
}


function editLists(){}



function getUsersLists(userKey){
    var userData = getLocalStorageJSON(userKey);
    return userData.lists;
}




function saveListItem(itemText, list){
    if (itemText !== textBeingEdited){
        removeItemFromSavedList(textBeingEdited);
    }

    var data = JSON.parse(localStorage.getItem(appName));
    var user = data.users[loggedInUser];
    var listToAddTo = user.lists[list];
    listToAddTo.push(itemText);

    user.lists[list] = listToAddTo;
    data.users[loggedInUser] = user;

    data = JSON.stringify(data);
    localStorage.setItem(appName, data);
}


function removeItemFromSavedList(text){
    var data = JSON.parse(localStorage.getItem(appName));
    var user = data.users[loggedInUser];
    var list = user.lists[activeList];
    var theIndex = list.indexOf(text);

    var arr = list.splice(theIndex);
    arr.shift();

    var newArr = list.concat(arr);
    user.lists[activeList] = newArr;
    data.users[loggedInUser] = user;
    data = JSON.stringify(data);
    localStorage.setItem(appName, data);
}





function notLoggedIn(){
    return (!loggedIn());
}


function loggedIn(){
   var sessionData = sessionStorage.getItem(sessionKeyLoggedInUser);
   if (sessionData == null){ return false;}
   else return true;
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


function redirectToHome(){
    var url = location.href;
}


function newUserValid(){
    var username = newUsernameInput.val();
    var password1 = newPasswordInput.val();
    var password2 = newPassword2Input.val();
    return (newAccountInfoValid(username, password1, password2));
}
