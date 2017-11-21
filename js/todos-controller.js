
(function(){


    var ui = new TodosUI();
    var model = new TodosModel();
    var vm = new TodosViewManipulator(ui, model);

    $(document).ready(function(){
        vm.setAppearance();
    });



    ui.addButton.click(function(){
        $('.todo-list').append(ui.newListItem);
    });




    ui.itemText.click(function(){
        if (vm.listItemIsNotClicked($(this))){
            vm.makeThisItemTheClickedItem($(this));
        }
    });


    ui.itemText.blur(function(){
        var textToSave = $(this).text();
        var list = getSessionStorageJSON(appName);
        list = list.activeList;
        saveListItem(textToSave, list);
    });


    ui.itemText.hover(
        function onMouseOver(){
            if (listItemIsNotClicked($(this))){
                addHoveredClassToListItem($(this));
            }
        },
        function onMouseOut(){
            removeHoveredClassFromListItem($(this))
        }
    );


    ui.itemText.dblclick(function(){
        if (listItemIsAlreadyClicked($(this))){
            undoClickedItem();
        }
    });


    ui.removeGlyph.click(function(){
        removeListItem($(this));
    });


    ui.todoCheckbox.click(function(){
        var deleteButton = $(this).siblings('span.' + removeGlyphiconClass);
        if ($(this).prop('checked')){
            deleteButton.removeClass(invisibleClass);
        }
        else{
            deleteButton.addClass(invisibleClass);
        }
    });


    ui.listMenuItem.click(function(){
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

