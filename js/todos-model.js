// For background-data manipulation.

function TodosModel(){

    this.appName = 'todosApp';
    this.appData = '';
    this.activeList = false;

    // Each user gets its own localStorage key, which begins with this prefix:
    this.localKeyUserPrefix = this.appName + '_user_';
    this.loggedInUser = false;

    this.sessionKeyLoggedInUser = this.appName + '_loggedInUser';
    this.sessionKeyActiveList = this.appName + '_activeList';
    this.textBeingEdited = false;

    var bs = new BrowserStorage();


    this.createAccount = function(username, password){
        var newUser = this.userKey(username);
        bs.addToLocalStorageAsJSON(newUser, initialUserData(password));
    };


    this.login = function(username, password){
        this.loggedInUser = username;
        sessionStorage.setItem(this.sessionKeyLoggedInUser, this.loggedInUser);
    };


    this.logout = function(){
        sessionStorage.removeItem(this.sessionKeyLoggedInUser);
        this.loggedInUser = false;
    };


    this.createNewList = function(listName){
        var listsBeingModified = this.getUsersLists();
        listsBeingModified[listName] = [];
        this.saveLists({lists:listsBeingModified});
    };


    this.editLists = function(){};



    this.getUsersLists = function(){
        var user = bs.getLocalStorageJSON(this.loggedInUserKey());
        return user.lists;
    };


    this.saveLists = function(lists){
        bs.modifyLocalStorageJSON(this.loggedInUserKey(), lists);
    };




    this.saveListItem = function(itemText, list){
        if (itemText !== textBeingEdited){
            removeItemFromSavedList(textBeingEdited);
        }

        var data = JSON.parse(localStorage.getItem(this.appName));
        var user = data.users[this.loggedInUser];
        var listToAddTo = user.lists[list];
        listToAddTo.push(itemText);

        user.lists[list] = listToAddTo;
        data.users[loggedInUser] = user;

        data = JSON.stringify(data);
        localStorage.setItem(appName, data);
    };


    this.removeItemFromSavedList = function(text){
        var data = JSON.parse(localStorage.getItem(appName));
        var user = data.users[loggedInUser];
        var list = user.lists[activeList];
        var theIndex = list.indexOf(text);

        var arr = list.splice(theIndex);
        arr.shift();

        var newArr = list.concat(arr);
        user.lists[activeList] = newArr;
        data.users[loggedInUser] = user;
        data = JSON.stringify(data);
        localStorage.setItem(appName, data);
    };



    this.notLoggedIn = function(){
        return (!this.loggedIn());
    };


    this.loggedIn = function(){
        var sessionData = sessionStorage.getItem(this.sessionKeyLoggedInUser);
        if (sessionData == null){ return false;}
        else return true;
    };


    this.redirectToHome = function(){
        location.replace('index.html');
    };


    this.createAccountLoginAndRedirectToHomePage = function(username, password){
        createAccount(username, password);
        login(username, password);
        this.redirectToHome();
    };


    this.newUserValid = function(){
        var username = newUsernameInput.val();
        var password1 = newPasswordInput.val();
        var password2 = newPassword2Input.val();
        return (newAccountInfoValid(username, password1, password2));
    };


    this.loginValid = function(username, password){
        if (usernameIsProperLength(username) &&
            passwordIsProperLength(password) &&
            usernameIsRegistered(username) &&
            passwordGoesWithUsername(password, username)){

            return true;
        }
        else return false;
    };


    this.passwordGoesWithUsername = function(password, username){
        var userKey = localKeyUserPrefix + username;
        var usernameFound = getLocalStorageJSON(userKey);
        if (usernameFound){
            return (usernameFound.password === password);
        }
        else return false;
    };


    this.usernameIsRegistered = function(username){
        var userKey = localKeyUserPrefix + username;
        return (typeof localStorage[userKey] !== 'null' &&
            typeof localStorage[userKey] !== 'undefined');
    };



    this.newAccountInfoValid = function(username, password1, password2){
        return (usernameIsProperLength(username) &&
            passwordPasses(password1, password2)
        );
    };


    this.passwordIsProperLength = function(password){
        return (password.length >= 8 && password.length <= 16);
    };


    this.usernameIsProperLength = function(username) {
        return (username.length >= 8 && username.length <= 16);
    };


    this.passwordPasses = function(password1, password2){
        return (twoEnteredPasswordsMatch(password1, password2) &&
            password1.length >= 8 && password1.length <= 16
        );
    };


    this.twoEnteredPasswordsMatch = function(password1, password2){
        return (password1 === password2);
    };


    this.userKey = function(username){
        return (this.localKeyUserPrefix + username);
    };


    this.loggedInUserKey = function(){
        return (this.localKeyUserPrefix + this.loggedInUser);
    };


    function initialUserData(password){
       return  {password:password, lists:{}};
    }


}
