
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
	return getBrowserStorage(localStorage, key);
}


function getSessionStorageJSON(key){
	return getBrowserStorage(sessionStorage, key);
}


function getBrowserStorage(localOrSession, key){
	return JSON.parse(localOrSession.getItem(key));
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
