var clickedItem = false;

$(".todo-list-item").click(function(){
    if ( $(this).hasClass('list-item-clicked') ){
        $(this).removeClass('list-item-clicked');
        clickedItem = false;
    }
    else if (clickedItem){
        clickedItem.removeClass('list-item-clicked');
        clickedItem = false;

        clickedItem = $(this);
        clickedItem.addClass('list-item-clicked');
        clickedItem.removeClass('list-item-hovered');
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
