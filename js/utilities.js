
var clickedClass = 'list-item-clicked';
var hoveredClass = 'list-item-hovered';
var listItemClass = 'todo-list-item';
var highlightClass = 'highlight-area';
var itemTextClass = 'item-text';
var removeGlyphiconClass = 'glyphicon-remove-circle';
var pencilGlyphiconClass = 'glyphicon-pencil';
var itemCheckboxClass = 'todo-checkbox';
var invisibleClass = 'invisible';
var itemText = $('.' + itemTextClass);
var itemToHighlight = '';
var todoCheckbox = $('.' + itemCheckboxClass);
var removeGlyph = $('.' + removeGlyphiconClass);
var clickedItem = false;
var newListAction = $('#new-list-action');
var createAccountSubmit = $('#create-account-submit');
var loginSubmit = $('#login-submit');
var sessionData = false;
var loginLink = $('#login-link');
var logoutLink = $('#logout-link');
var listMenuItem = $('.list-menu-item');
var loggedInUser = '';
var textBeingEdited = '';
var activeList = '';
var addButton = $('#add-button');

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
    appData.users[username] = {
        password:password,
        lists:{}
    };

    localStorage.setItem(appName, JSON.stringify(appData));
}


function login(username, password){
    var obj = JSON.stringify({loggedInUser:username});
    loggedInUser = username;
    sessionData = sessionStorage.setItem(appName, obj);
}


function logout(){
    sessionStorage.removeItem(appName);
    sessionData = false;
}


function newList(){}


function editLists(){}




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
   var sessionData = sessionStorage.getItem(appName);

   if (sessionData == null){ return false;}

   sessionData = JSON.parse(sessionData);

   if (sessionData.loggedInUser){
       return true;
   }
   else return false;
}


function setAppearance(){
    if (notLoggedIn()){
        $('#dropdown-menus').addClass('invisible');
        $('#login-and-create-account').removeClass('invisible-and-collapsed');
        $('#logout-link-container').addClass('invisible-and-collapsed');
    }

    if (loggedIn()){
        $('#login-and-create-account').addClass('invisible-and-collapsed');
        $('#logout-link-container').removeClass('invisible-and-collapsed');
        $('#dropdown-menus').removeClass('invisible');
    }

}
