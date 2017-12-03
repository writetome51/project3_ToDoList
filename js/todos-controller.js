
(function(){


    var ui = new TodosUI();
    var uim = new TodosUIManipulator(ui, model);
    var ctrh = new ControllerHelper(ui, uim);

    $(document).ready(function onReadyHandler(){
        uim.setAppearance();
    });


    ui.itemText.click(function clickItemHandler(){
        ctrh.makeClickedItem($(this));
    });


    ui.itemText.blur(function itemBlurHandler(){
       uim.saveListItem($(this));
    });


    ui.itemText.hover(function hoverHandler(){
        ctrh.toggleHover($(this));
    });


    ui.itemText.dblclick(function doubleClickHandler(){
       ctrh.handleItemDoubleClick();
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
        uim.handleNewListItemAddition();
    });



})();
