
(function(){


    var ui = new TodosUI();
    var model = new TodosModel();
    var vm = new TodosViewManipulator(ui, model);

    $(document).ready( vm.setAppearance );


    ui.addButton.click( vm.addNewListItem );


    ui.itemText.click(function(){
        vm.makeClickedItem($(this));
    });


    ui.itemText.blur(function(){
       vm.saveListItem($(this));
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
        vm.removeListItem($(this));
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


    ui.listsMenu.click( vm.fillListsMenuWithItems );


    ui.listMenuItem.click(function(){
        model.setActiveList($(this).text());
    });


    ui.newListAction.click(function(){
        $('#the-todo-list').remove();
        $('#new-list-form').removeClass('invisible-and-collapsed');
    });


    ui.createAccountForm.submit(function(event){
        event.preventDefault();


    });


    ui.loginLink.click(function(){
        $('#main-home-navbar').addClass('invisible-and-collapsed');
        $('#todos-body').addClass('invisible-and-collapsed');
        $('#login-section').removeClass('invisible-and-collapsed');
    });


    ui.logoutLink.click( vm.handleLogout );


    ui.loginForm.submit( vm.handleLogin );


    ui.newListItemForm.submit(function(){

    });


})();

