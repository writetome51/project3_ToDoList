

function ElementTextGetterSetter(dom, classes){

    this.noListsFound = 'No Lists';


    this.emptyNewListNameInput = function(){
        dom.newListName.val('');
        this.testFunction();
    };


    this.getLoginValues = function(){
        var values = {};
        values.username = dom.loginUsername.val();
        values.password = dom.loginPassword.val();
        return values;
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

