// This is a library of essential general-use functions.


// DOM manipulation

function getElementsByIDs(IDs){
    for (var id=0;  id < IDs.length;  ++id){
        IDs[id] = document.getElementById(IDs[id]);
    }
    return IDs; // element objects
}



// Generic object manipulation

function callAsMethodOfTheObject(obj, functionToCall){
    obj.functionToCall = functionToCall;
    obj.functionToCall();
}



// Modifies existing properties in obj, or adds new ones.
function modifyObject(obj, propertiesAndValuesToModify){
	for (var prop in propertiesAndValuesToModify){
		obj[prop] = propertiesAndValuesToModify[prop];
	}
	return obj;
}