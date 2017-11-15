function newAccountInfoValid(username, password1, password2){
    return (usernamePasses(username) &&
        passwordPasses(password1, password2)
    );
}


function usernamePasses(username) {
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
