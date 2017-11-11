

itemText.click(function(){
    if (listItemIsNotClicked($(this))){
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


itemText.dblclick(function(){
    if (listItemIsAlreadyClicked($(this))){
        undoClickedItem();
    }
});


removeGlyph.click(function(){
    removeListItem($(this));
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



