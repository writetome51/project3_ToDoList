
// Additions to the Array prototype:

Array.prototype.removeItems = function(items){
	for (var i=0; i<items.length;  ++i){
		this.removeItem(items[i]);
	}
	return this;
};


Array.prototype.removeItem =  function(item){
	if (this.itemExists(item)){
		var index = this.indexOf(item);
		this.splice(index, 1);
	}
	return this;
};


Array.prototype.removeAdjacentItemsStartingWith = function(item, numToRemove){
	if (this.itemExists(item)){
		var index = this.indexOf(item);
		this.splice(index, numToRemove);
	}
	return this;
};


Array.prototype.itemExists = function(item){
	return (this.indexOf(item) > -1);
};

// remember to remove those prototype additions at program's end.