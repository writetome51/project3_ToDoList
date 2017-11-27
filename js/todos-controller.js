
(function(){


    var ui = new TodosUI();
    var model = new TodosModel();
    var vm = new TodosViewManipulator(ui, model);

    $(document).ready(function onReadyHandler(){
        vm.setAppearance();
    });


    ui.addButton.click(function addButtonHandler(){
        vm.addNewListItem();
    });


    ui.itemText.click(function clickItemHandler(){
        vm.makeClickedItem($(this));
    });


    ui.itemText.blur(function itemBlurHandler(){
       vm.saveListItem($(this));
    });


    ui.itemText.hover(
        function mouseOverHandler(){
            vm.addHoveredClassIfNotClicked($(this))
        },
        function mouseOutHandler(){
            vm.removeHoveredClassFromListItem($(this))
        }
    );


    ui.itemText.dblclick(function doubleClickHandler(){
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


    ui.listsMenu.click(function(){
        vm.fillListsMenuWithItems();
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
    });





    ui.logoutLink.click(function(){
        vm.handleLogout();
    });


    ui.loginForm.submit(function(){
        vm.handleLogin();
    });


    ui.newListItemForm.submit(function(){

    });


})();

