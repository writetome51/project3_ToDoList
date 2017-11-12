

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




newListAction.click(function(){
    $('#the-todo-list').remove();
    $('#new-list-form').removeClass('invisible-and-collapsed');
});


createAccountSubmit.click(function(){
    var username = $('#create-account-username').val();
    var password = $('#create-account-password').val();
    createAccount(username, password);

    $('#create-account-form').remove();
    $('#account-creation-success').removeClass('invisible-and-collapsed');
});


loginLink.click(function(){
    $('#main-home-navbar').addClass('invisible-and-collapsed');
    $('#todos-body').addClass('invisible-and-collapsed');
    $('#login-section').removeClass('invisible-and-collapsed');
});


logoutLink.click(function(){
    logout();
    setAppearance();
});


loginSubmit.click(function(){
    var username = $('#login-username').val();
    var password = $('#login-password').val();
    login(username, password);

    $('#login-section').remove();
    $('#main-home-navbar').removeClass('invisible-and-collapsed');
    $('#todos-body').removeClass('invisible-and-collapsed');

    setAppearance();
});
