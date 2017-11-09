
var clickedClass = 'list-item-clicked';
var hoveredClass = 'list-item-hovered';
var highlightClass = 'highlight-area';
var itemCheckboxClass = 'todo-checkbox';
var invisibleClass = 'invisible';
var todoListItem = $('.' + highlightClass);
var todoCheckbox = $('.' + itemCheckboxClass);
var clickedItem = false;


todoListItem.click(function(){
    if ( thisItemIsAlreadyClicked($(this)) ){
        undoClickedItem();
    }
    else{
         makeThisItemTheClickedItem($(this));
    }
});


todoCheckbox.click(function(){
    var deleteButton = $(this).siblings('span.glyphicon-remove-circle');
    if ($(this).prop('checked')){
        deleteButton.removeClass(invisibleClass);
    }
    else{
        deleteButton.addClass(invisibleClass);
    }
});


todoListItem.hover(
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
}


function makeRemoveGlyphVisible(obj){
    obj.find('.glyphicon-remove-circle').removeClass(invisibleClass);
}

function makeRemoveGlyphInvisible(obj){
    obj.find('.glyphicon-remove-circle').addClass(invisibleClass);
}


function thereIsAClickedItem(){
    if (clickedItem){ return true; }
    else { return false; }
}


function thisItemIsAlreadyClicked(obj){
    return  obj.hasClass(clickedClass);
}


function removeHoverClassAndAddClickedClass(obj){
    obj.addClass(clickedClass);
    obj.removeClass(hoveredClass);
}


function clickedItemCheckboxIsChecked(){
    return clickedItem.children('.' + itemCheckboxClass).prop('checked');
}


function removeListItem(item){
    item.remove();
}

