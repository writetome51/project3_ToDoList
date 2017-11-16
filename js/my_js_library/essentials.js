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


// Preferable to simply calling JSON.parse() because JSON.parse() doesn't
// tell you if the passed argument is not in JSON format.
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
