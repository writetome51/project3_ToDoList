
(function(){

    var bs = new BrowserStorage();
    var model = new TodosModel();
    var vm = new TodosViewModel();

    $(document).ready(function(){
        setAppearance();
    });



    vm.addButton.click(function(){
        $('.todo-list').append(
            "<li class='todo-list-item' draggable='true'><input type='checkbox' class='todo-checkbox' title='Check box to mark item done, or to perform action on item'><span class='highlight-area'> <span class='item-text'>"
            + newItem +
            "</span><span class='glyphicon glyphicon-remove-circle  invisible'></span></span></li>"
        );
    });




    itemText.click(function(){
        if (listItemIsNotClicked($(this))){
            makeThisItemTheClickedItem($(this));
        }
    });


    itemText.blur(function(){
        var textToSave = $(this).text();
        var list = getSessionStorageJSON(appName);
        list = list.activeList;
        saveListItem(textToSave, list);
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


    listMenuItem.click(function(){
        activeList = $(this).text();
    });


    newListAction.click(function(){
        $('#the-todo-list').remove();
        $('#new-list-form').removeClass('invisible-and-collapsed');
    });


    createAccountForm.submit(function(event){
        event.preventDefault();

        if (newUserValid()){
            createAccountLoginAndRedirectToHomePage();
        }
        else{
            accountCreationUnsuccessful.removeClass('invisible-and-collapsed');
        }
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


    loginForm.submit(function(){
        var username = $('#login-username').val();
        var password = $('#login-password').val();
        login(username, password);

        $('#login-section').addClass('invisible-and-collapsed');
        $('#main-home-navbar').removeClass('invisible-and-collapsed');
        $('#todos-body').removeClass('invisible-and-collapsed');

        setAppearance();
    });


    newListItemForm.submit(function(){

    });


})();

