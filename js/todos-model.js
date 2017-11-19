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
    this.sessionData = false;
    this.textBeingEdited = false;



    function createAccount(username, password){
        var data = {password:password, lists:{}};
        var userKey = localKeyUserPrefix + username;

        localStorage.setItem(userKey, JSON.stringify(data));
    }


    function login(username, password){
        loggedInUser = username;
        sessionStorage.setItem(sessionKeyLoggedInUser, loggedInUser);
    }


    function logout(){
        sessionStorage.removeItem(sessionKeyLoggedInUser);
        sessionData = false;
    }


    function createNewList(username, listName){
        var userKey = localKeyUserPrefix + username;
        var listsBeingModified = getUsersLists(userKey);
        listsBeingModified[listName] = [];
        modifyLocalStorage(userKey, {lists:listsBeingModified});
    }


    function editLists(){}



    function getUsersLists(userKey){
        var userData = getLocalStorageJSON(userKey);
        return userData.lists;
    }




    function saveListItem(itemText, list){
        if (itemText !== textBeingEdited){
            removeItemFromSavedList(textBeingEdited);
        }

        var data = JSON.parse(localStorage.getItem(appName));
        var user = data.users[loggedInUser];
        var listToAddTo = user.lists[list];
        listToAddTo.push(itemText);

        user.lists[list] = listToAddTo;
        data.users[loggedInUser] = user;

        data = JSON.stringify(data);
        localStorage.setItem(appName, data);
    }


    function removeItemFromSavedList(text){
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
    }



    this.notLoggedIn = function(){
        return (!loggedIn());
    };


    function loggedIn(){
        var sessionData = sessionStorage.getItem(sessionKeyLoggedInUser);
        if (sessionData == null){ return false;}
        else return true;
    }


    function redirectToHome(){
        location.replace('index.html');
    }


    function createAccountLoginAndRedirectToHomePage(username, password){
        createAccount(username, password);
        login(username, password);
        redirectToHome();
    }


    function newUserValid(){
        var username = newUsernameInput.val();
        var password1 = newPasswordInput.val();
        var password2 = newPassword2Input.val();
        return (newAccountInfoValid(username, password1, password2));
    }


    function loginValid(username, password){
        if (usernameIsProperLength(username) &&
            passwordIsProperLength(password) &&
            usernameIsRegistered(username) &&
            passwordGoesWithUsername(password, username)){

            return true;
        }
        else return false;
    }


    function passwordGoesWithUsername(password, username){
        var userKey = localKeyUserPrefix + username;
        var usernameFound = getLocalStorageJSON(userKey);
        if (usernameFound){
            return (usernameFound.password === password);
        }
        else return false;
    }


    function usernameIsRegistered(username){
        var userKey = localKeyUserPrefix + username;
        return (typeof localStorage[userKey] !== 'null' &&
            typeof localStorage[userKey] !== 'undefined');
    }



    function newAccountInfoValid(username, password1, password2){
        return (usernameIsProperLength(username) &&
            passwordPasses(password1, password2)
        );
    }


    function passwordIsProperLength(password){
        return (password.length >= 8 && password.length <= 16);
    }


    function usernameIsProperLength(username) {
        return (username.length >= 8 && username.length <= 16);
    }


    function passwordPasses(password1, password2){
        return (twoEnteredPasswordsMatch(password1, password2) &&
            password1.length >= 8 && password1.length <= 16
        );
    }


    function twoEnteredPasswordsMatch(password1, password2){
        return (password1 === password2);
    }


}
