
function UIController(ui, uim){

    var uich = new UIControllerHelper(ui, uim);

    this.loadEvents = function(){

        ui.itemText.click(function clickItemHandler(){
            uich.makeClickedItem($(this));
        });


        ui.itemText.blur(function itemBlurHandler(){
            uim.saveListItem($(this));
        });


        ui.itemText.hover(function hoverHandler(){
            uich.toggleHover($(this));
        });


        ui.itemText.dblclick(function doubleClickHandler(){
            uich.handleItemDoubleClick();
        });


        ui.removeGlyph.click(function removeListItemHandler(){
            uich.removeListItem($(this));
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
            uich.handleNewListAction();
        });


        ui.createAccountForm.submit(function createAccountSubmitHandler(event){
            event.preventDefault();
            uich.handleAccountCreation();
        });


        ui.loginForm.submit(function loginSubmitHandler(event){
            event.preventDefault();
            uich.handleLogin();
        });


        ui.logoutLink.click(function logoutLinkHandler(){
            uich.handleLogout();
        });


        ui.newListForm.submit(function newListSubmitHandler(event){
            event.preventDefault();
            uich.handleNewListCreation();
        });


        ui.newListItemForm.submit(function newListItemSubmitHandler(event){
            event.preventDefault();
            uich.handleNewListItemAddition();
        });


        (new ListsMenu(ui, uim)).loadEvents();

    };


}
