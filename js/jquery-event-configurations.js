
var clickedClass = 'list-item-clicked';
var hoveredClass = 'list-item-hovered';
var highlightClass = 'highlight-area';
var itemTextClass = 'item-text';
var removeGlyphiconClass = 'glyphicon-remove-circle';
var pencilGlyphiconClass = 'glyphicon-pencil';
var itemCheckboxClass = 'todo-checkbox';
var invisibleClass = 'invisible';
var itemText = $('.' + itemTextClass);
var todoListItem = '';
var todoCheckbox = $('.' + itemCheckboxClass);
var removeGlyph = $('.' + removeGlyphiconClass);
var clickedItem = false;


itemText.click(function(){
    if (listItemIsAlreadyClicked($(this))){
        undoClickedItem();
    }
    if ( thisItemIsAlreadyClicked(todoListItem) ){
        undoClickedItem();
    }
    else{
         makeThisItemTheClickedItem($(this));
    }
});


removeGlyph.click(function(){

});


todoCheckbox.click(function(){
    var deleteButton = $(this).siblings('span.' + removeGlyphiconClass);
    if ($(this).prop('checked')){
        deleteButton.removeClass(invisibleClass);
    }
    else{
        deleteButton.addClass(invisibleClass);
    }
});


itemText.hover(
    function onMouseOver(){
        if ( !$(this).hasClass(clickedClass) ){
            $(this).addClass(hoveredClass);
        }
    },
    function onMouseOut(){
        $(this).removeClass(hoveredClass);
    }
);



// Below are utility functions used in the events above.

function undoClickedItem(){
    if (thereIsAClickedItem()){
        clickedItem.removeClass(clickedClass);
        makeRemoveGlyphInvisible(clickedItem);
        makePencilGlyphInvisible(clickedItem);
        makeItemNotEditable(clickedItem);
    }
    clickedItem = false;
}


function makeThisItemTheClickedItem(obj){
    undoClickedItem();
    setClickedItem(obj);
}


function setClickedItem(obj){
    clickedItem = obj;
    removeHoverClassAndAddClickedClass(clickedItem);
    makeRemoveGlyphVisible(clickedItem);
    makePencilGlyphVisible(clickedItem);
    makeItemEditable(clickedItem);
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


function thereIsAClickedItem(){
    if (clickedItem){ return true; }
    else { return false; }
}


function listItemIsAlreadyClicked(obj){
    todoListItem = obj.parent('.' + highlightClass);
    return thisItemIsAlreadyClicked(todoListItem);
}


function thisItemIsAlreadyClicked(obj){
    return  obj.hasClass(clickedClass);
}


function removeHoverClassAndAddClickedClass(obj){
    obj.addClass(clickedClass);
    obj.removeClass(hoveredClass);
}


function makeItemEditable(obj){
    obj.children('.' + itemTextClass).attr("contenteditable", "true");
}


function makeItemNotEditable(obj){
    obj.children('.' + itemTextClass).removeAttr('contenteditable');
}


function clickedItemCheckboxIsChecked(){
    return clickedItem.children('.' + itemCheckboxClass).prop('checked');
}


function removeListItem(item){
    item.remove();
}


function createAccount(){}


function login(){}


function newList(){}


function editLists(){}
