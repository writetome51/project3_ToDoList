
(function(){


    var ui = new TodosUI();
    var uim = new TodosUIManipulator(ui);
    var ctrh = new ControllerHelper(uim);
    var cm = new ContentManager();


    $(document).ready(function onReadyHandler(){
        ctrh.load();
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
        ctrh.removeListItem($(this));
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
        ctrh.handleNewListAction();
    });


    ui.createAccountForm.submit(function createAccountSubmitHandler(event){
        event.preventDefault();
        ctrh.handleAccountCreation();
    });


    ui.loginForm.submit(function loginSubmitHandler(event){
        event.preventDefault();
        ctrh.handleLogin();
    });


    ui.logoutLink.click(function logoutLinkHandler(){
        ctrh.handleLogout();
    });


    ui.newListForm.submit(function newListSubmitHandler(event){
        event.preventDefault();
        ctrh.handleNewListCreation();
    });


    ui.newListItemForm.submit(function newListItemSubmitHandler(event){
        event.preventDefault();
        ctrh.handleNewListItemAddition();
    });


})();
