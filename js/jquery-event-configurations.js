
var clickedClass = 'list-item-clicked';
var hoveredClass = 'list-item-hovered';
var listItemClass = 'todo-list-item';
var itemCheckboxClass = 'todo-checkbox';
var invisibleClass = 'invisible';
var todoListItem = $('.' + listItemClass);
var todoCheckbox = $('.' + itemCheckboxClass);
var clickedItem = false;


todoListItem.click(function(){
    if ( thisItemIsAlreadyClicked($(this)) ){
        undoClickedItem($(this));
    }
    else if (thereIsAClickedItem()){
        makeThisItemTheClickedItem($(this));
    }
    else{
        clickedItem = $(this);
        clickedItem.removeClass(hoveredClass);
        clickedItem.addClass(clickedClass);

        /*******  May not be necessary:

        // Remember that .children() only selects direct children:
        if ( clickedItemCheckboxIsChecked() ){
            clickedItem.children('span.glyphicon-remove-circle').addClass('invisible');
        }
         *******/
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

function undoClickedItem(obj){
    obj.removeClass(clickedClass);
    clickedItem = false;
}

function thereIsAClickedItem(){
    if (clickedItem){ return true; }
    else { return false; }
}

function thisItemIsAlreadyClicked(obj){
    return  obj.hasClass(clickedClass)
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


function makeThisItemTheClickedItem(obj){
    undoClickedItem(clickedItem);
    clickedItem = obj;
    removeHoverClassAndAddClickedClass(clickedItem);
}
