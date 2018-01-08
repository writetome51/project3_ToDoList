

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


    this.getNewAccountValues = function(){
        var values = {};
        values.username = ui.newUsernameInput.val();
        values.password1 = ui.newPasswordInput.val();
        values.password2 = ui.newPassword2Input.val();
        return values;
    };





    this.setAppNameHeader = function(){
        ui.appNameHeader.text(ui.appNameForDisplay);
    };


    this.setWelcomeAppNameHeader = function(){
        ui.appNameHeader.text('Welcome to ' + ui.appNameForDisplay);
    };



}
