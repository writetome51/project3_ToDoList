
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


    ui.removeGlyph.click(function removeListItemHandler(){
        uim.removeListItem($(this));
    });


    ui.todoCheckbox.click(function checkboxClickHandler(){
        var deleteButton = $(this).siblings('span.' + removeGlyphiconClass);
        if ($(this).prop('checked')){
            deleteButton.removeClass(invisibleClass);
        }
        else{
            deleteButton.addClass(invisibleClass);
        }
    });


    ui.newListAction.click(function newListActionClickHandler(){
       uim.showNewListForm();
    });


    ui.createAccountForm.submit(function createAccountSubmitHandler(event){
        event.preventDefault();
        uim.handleAccountCreation();
    });


    ui.loginForm.submit(function loginSubmitHandler(event){
        event.preventDefault();
        uim.handleLogin();
    });


    ui.logoutLink.click(function logoutLinkHandler(){
        uim.handleLogout();
    });


    ui.newListForm.submit(function newListSubmitHandler(event){
        event.preventDefault();
        uim.handleNewListCreation();
    });


    ui.newListItemForm.submit(function newListItemSubmitHandler(event){
        event.preventDefault();
        uim.saveListItem($(this));
    });



})();
