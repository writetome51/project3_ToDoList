
(function(){


    var ui = new TodosUI();
    var model = new TodosModel();
    var uim = new TodosUIManipulator(ui, model);

    $(document).ready(function onReadyHandler(){
        uim.setAppearance();
    });


    ui.addButton.click(function addButtonHandler(){
        uim.addNewListItem();
    });


    ui.itemText.click(function clickItemHandler(){
        uim.makeClickedItem($(this));
    });


    ui.itemText.blur(function itemBlurHandler(){
       uim.saveListItem($(this));
    });


    ui.itemText.hover(
        function mouseOverHandler(){
            uim.addHoveredClassIfNotClicked($(this))
        },
        function mouseOutHandler(){
            uim.removeHoveredClassFromListItem($(this))
        }
    );


    ui.itemText.dblclick(function doubleClickHandler(){
        if (uim.listItemIsAlreadyClicked($(this))){
            uim.undoClickedItem();
        }
    });


    ui.removeGlyph.click(function(){
        uim.removeListItem($(this));
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
        uim.fillListsMenuWithItems();
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
        uim.handleAccountCreation();
    });


    ui.loginForm.submit(function(event){
        event.preventDefault();
        uim.handleLogin();
    });


    ui.logoutLink.click(function(){
        uim.handleLogout();
    });


    ui.newListForm.submit(function newListSubmitHandler(){

    });


    ui.newListItemForm.submit(function(){

    });


})();

