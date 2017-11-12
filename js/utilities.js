
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
    obj.children('.' + itemTextClass).attr("contenteditable", "true");
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
        lists:[]
    };

    localStorage.setItem(appName, JSON.stringify(appData));
}


function login(username, password){
    var obj = JSON.stringify({loggedInUser:username});
    sessionData = sessionStorage.setItem(appName, obj);
}


function logout(){
    sessionStorage.removeItem(appName);
    sessionData = false;
}


function newList(){}


function editLists(){}


function saveListItem(){}


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
