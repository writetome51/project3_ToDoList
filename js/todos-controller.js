
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
        vm.makeThisItemTheClickedItem($(this));
    });


    ui.itemText.blur(function(){
        model.saveListItem( $(this).text() );
    });


    ui.itemText.hover(
        function onMouseOver(){
            vm.addHoveredClassIfNotClicked($(this))
        },
        function onMouseOut(){
            vm.removeHoveredClassFromListItem($(this))
        }
    );


    ui.itemText.dblclick(function(){
        if (vm.listItemIsAlreadyClicked($(this))){
            vm.undoClickedItem();
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
        model.setActiveList($(this).text());
    });


    ui.newListAction.click(function(){
        $('#the-todo-list').remove();
        $('#new-list-form').removeClass('invisible-and-collapsed');
    });


    ui.createAccountForm.submit(function(event){
        event.preventDefault();

        if (vm.newUserInputsValidated()){
            vm.createAccountLoginAndRedirectToHome();
        }
        else{
            ui.accountCreationUnsuccessful.removeClass('invisible-and-collapsed');
        }
    });


    ui.loginLink.click(function(){
        $('#main-home-navbar').addClass('invisible-and-collapsed');
        $('#todos-body').addClass('invisible-and-collapsed');
        $('#login-section').removeClass('invisible-and-collapsed');
    });


    ui.logoutLink.click(function(){
        logout();
        vm.setAppearance();
    });


    ui.loginForm.submit(function(){
        var username = $('#login-username').val();
        var password = $('#login-password').val();
        login(username, password);

        $('#login-section').addClass('invisible-and-collapsed');
        $('#main-home-navbar').removeClass('invisible-and-collapsed');
        $('#todos-body').removeClass('invisible-and-collapsed');

        vm.setAppearance();
    });


    ui.newListItemForm.submit(function(){

    });


})();

