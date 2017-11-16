
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
    return (localStorage[userKey] != null);
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
