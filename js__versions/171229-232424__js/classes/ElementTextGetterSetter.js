

function ElementTextGetterSetter(ui, classes){

    this.noListsFound = 'No Lists';


    this.emptyNewListNameInput = function(){
        ui.newListName.val('');
    };


    this.getLoginValues = function(){
        var values = {};
        values.username = ui.loginUsername.val();
        values.password = ui.loginPassword.val();
        return values;
    };


    this.getNewListName = function(){
        return ui.newListName.val();
    };


    this.setNewItemText = function(){
        ui.newItemText = ui.newListItemTextInput.val();
    };


    this.getNewItemText = function(){
        return ui.newItemText;
    };


    this.getItemText = function(listItem){
        return listItem.find('.' + classes.itemText).text();
    };


    this.getNewAccountValues = function(){
        var values = {};
        values.username = ui.newUsernameInput.val();
        values.password1 = ui.newPasswordInput.val();
        values.password2 = ui.newPassword2Input.val();
        return values;
    };


    this.setListNameHeader = function(listName){
        ui.listNameHeader.text(listName);
    };


    this.setAppNameHeader = function(){
        ui.appNameHeader.text(ui.appNameForDisplay);
    };


    this.setWelcomeAppNameHeader = function(){
        ui.appNameHeader.text('Welcome to ' + ui.appNameForDisplay);
    };


    this.createListsMenuItems = function(items){
        var innerHtml = this.createListsMenuItemsHTML(items);
        ui.listsMenuItems.html(innerHtml);
    };


    this.createListsMenuItemsHTML = function(items){
        if (items === []){
            return '<li id="no-lists-found">' + this.noListsFound  + '</li>';
        }
        for (var item=0, html='';  item < items.length;  ++item){
            html += '<li><a class="' + classes.listsMenuItem +
                '">' + items[item]  + '</a></li>';
        }
        return html;
    };



}
