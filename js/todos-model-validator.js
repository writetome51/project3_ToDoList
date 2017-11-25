function TodosModelValidator(browserStorage){

   this.newAccountInfoValid = function(username, password1, password2){
        return (this.usernameIsProperLength(username) &&
            this.passwordPasses(password1, password2)
        );
    };


  this.usernameIsProperLength = function(username) {
        return (username.length >= 8 && username.length <= 16);
    };


    this.passwordPasses = function(password1, password2){
        return (this.twoEnteredPasswordsMatch(password1, password2) &&
            this.passwordIsProperLength(password1)
        );
    };


    this.twoEnteredPasswordsMatch = function(password1, password2){
        return (password1 === password2);
    };


    this.loginValid = function(username, userKey, password){
        if (this.usernameIsProperLength(username) &&
            this.passwordIsProperLength(password) &&
            this.userKeyIsRegistered(userKey) &&
            this.passwordGoesWithUserKey(password, userKey)){

            return true;
        }
        else return false;
    };


    this.passwordGoesWithUserKey = function(password, userKey){
        var usernameFound = browserStorage.getLocalStorageJSON(userKey);
        if (usernameFound){
            return (usernameFound.password === password);
        }
        else return false;
    };


    this.userKeyIsRegistered = function(userKey){
        return (typeof localStorage[userKey] !== 'null' &&
            typeof localStorage[userKey] !== 'undefined');
    };
 

    this.passwordIsProperLength = function(password){
        return (password.length >= 8 && password.length <= 16);
    };


    this.notLoggedIn = function(){
        return (!this.loggedIn());
    };


    this.loggedIn = function(){
        var sessionData = sessionStorage.getItem(this.sessionKeyLoggedInUser);
        if ( ! sessionData){ return false;}
        else return true;
    };


}


 