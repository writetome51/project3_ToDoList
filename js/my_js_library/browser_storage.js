
// Retrieve item from local storage or session storage, save changes, and put back:

function modifyLocalStorage(key, propertiesToModifyAndTheirNewValues){
	var obj = getLocalStorageJSON(key);
    obj = modifyObject(obj, propertiesToModifyAndTheirNewValues);
    addToLocalStorageAsJSON(key, obj);
}


function modifySessionStorage(key, propertiesToModifyAndTheirNewValues){
	var obj = getSessionStorageJSON(key);
	obj = modifyObject(obj, propertiesToModifyAndTheirNewValues);
	addToSessionStorageAsJSON(key, obj);
}


// gets item stored as JSON string and returns it as object:
function getLocalStorageJSON(key){
	var json = getBrowserStorage(localStorage, key);
	return convertToObject(json);

}


function getSessionStorageJSON(key){
    var json = getBrowserStorage(sessionStorage, key);
    return convertToObject(json);
}



function convertToObject(jsonString){
    if (jsonString == false){
        throw new Error('Item not found.');
    }
    try {
        return JSON.parse(jsonString);
    }
    catch (error){
        throw new Error('Item found is not in JSON format.')
    }
}



function addToLocalStorageAsJSON(key, value){
	value = JSON.stringify(value);
	setBrowserStorage(localStorage, {key:key, value:value});
}


function addToSessionStorageAsJSON(key, value){
	value = JSON.stringify(value);
	setBrowserStorage(sessionStorage, {key:key, value:value});
}


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
