// For all handling of data stored in localStorage or sessionStorage.

function BrowserStorage(){

// Retrieve item from local storage, save changes, and put back:
    this.modifyLocalStorage = function(key, propertiesToModifyAndTheirNewValues){
        var obj = this.getLocalStorageJSON(key);
        obj = modifyObject(obj, propertiesToModifyAndTheirNewValues);
        this.addToLocalStorageAsJSON(key, obj);
    };


// Retrieve item from session storage, save changes, and put back:
    this.modifySessionStorage = function(key, propertiesToModifyAndTheirNewValues){
        var obj = this.getSessionStorageJSON(key);
        obj = modifyObject(obj, propertiesToModifyAndTheirNewValues);
        this.addToSessionStorageAsJSON(key, obj);
    };


// returns JSON string converted to object:
    this.getLocalStorageJSON = function(key){
        var json = getBrowserStorage(localStorage, key);
        return convertToObject(json);
    };


    // returns JSON string converted to object:
    this.getSessionStorageJSON = function(key){
        var json = getBrowserStorage(sessionStorage, key);
        return convertToObject(json);
    };


    // For adding a new key-value pair to local storage:
    this.addToLocalStorageAsJSON = function(key, obj){
        obj = JSON.stringify(obj);
        setBrowserStorage(localStorage, {key:key, value:obj});
    };


    // For adding a new key-value pair to session storage:
    this.addToSessionStorageAsJSON = function(key, obj){
        obj = JSON.stringify(obj);
        setBrowserStorage(sessionStorage, {key:key, value:obj});
    };



    function setBrowserStorage(localOrSession, keyAndValuePair){
        localOrSession.setItem(keyAndValuePair.key, keyAndValuePair.value);
    }


    function getBrowserStorage(localOrSession, key){
        var itemFound = localOrSession.getItem(key);
        if (itemFound){
            return itemFound;
        }
        else return false;
    }


}



