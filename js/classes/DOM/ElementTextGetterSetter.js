

function ElementTextGetterSetter(dom){

    this.noListsFound = 'No Lists';


    this.emptyNewListNameInput = function(){
        dom.newListName.val('');
        this.testFunction();
    };


    this.getNewListName = function(){
        return dom.newListName.val();
    };


    this.getNewAccountValues = function(){
        var values = {};
        values.username = dom.newUsernameInput.val();
        values.password1 = dom.newPasswordInput.val();
        values.password2 = dom.newPassword2Input.val();
        return values;
    };


    this.setAppNameHeader = function(){
        dom.appNameHeader.text(dom.appNameForDisplay);
    };


}

