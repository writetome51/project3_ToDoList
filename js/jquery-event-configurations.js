var clickedItem = false;

$(".todo-list-item").click(function(){
    if ( thisItemIsAlreadyClicked($(this)) ){
        removeClickedHighlightAndEraseClickedItem($(this));
    }
    else if (thereIsAClickedItem()){
        removeClickedHighlightAndEraseClickedItem(clickedItem);
        clickedItem = $(this);
        removeHoverClassAndAddClickedClass(clickedItem);
    }
    else{
        clickedItem = $(this);
        clickedItem.removeClass('list-item-hovered');
        clickedItem.addClass('list-item-clicked');
        if ( clickedItem.children('.todo-checkbox').prop('checked')){
            clickedItem.children('span.glyphicon-remove-circle').addClass('invisible');
        }
    }
});




$(".todo-checkbox").click(function(){
    var deleteButton = $(this).siblings('span.glyphicon-remove-circle');
    if ($(this).prop('checked')){
        deleteButton.removeClass('invisible');
    }
    else{
        deleteButton.addClass('invisible');
    }
});


$(".todo-list-item").hover(
    function toggleHovered(){

        if ( !$(this).hasClass('list-item-clicked') ){
            $(this).addClass('list-item-hovered');
        }

    },
    function onMouseOut(){
        $(this).removeClass('list-item-hovered');
    }
);


function removeClickedHighlightAndEraseClickedItem(obj){
    obj.removeClass('list-item-clicked');
    clickedItem = false;
}

function thereIsAClickedItem(){
    if (clickedItem){ return true; }
    else { return false; }
}

function thisItemIsAlreadyClicked(obj){
    return  obj.hasClass('list-item-clicked')
}

function removeHoverClassAndAddClickedClass(obj){
    obj.addClass('list-item-clicked');
    obj.removeClass('list-item-hovered');
}
