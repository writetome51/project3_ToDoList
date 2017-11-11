

itemText.click(function(){
    if (listItemIsAlreadyClicked($(this))){
        undoClickedItem();
    }
    else{
         makeThisItemTheClickedItem($(this));
    }
});


itemText.hover(
    function onMouseOver(){
        if (listItemIsNotClicked($(this))){
            addHoveredClassToListItem($(this));
        }
    },
    function onMouseOut(){
        removeHoveredClassFromListItem($(this))
    }
);


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



