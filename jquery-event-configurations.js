$(".todo-list-item").click(function(){
    $(this).children('span.glyphicon-remove-circle').toggleClass('invisible');
});

$(".todo-list-item").hover(function(){
    $(this).toggleClass('list-item-highlighted');
});
