// For background-data manipulation.

function Model(){

    this.appName = 'todosApp';
    this.appData = '';
	this.loggedInUser = false;
    // Each user gets its own localStorage key, which begins with this prefix:
    this.localKeyUserPrefix = this.appName + '_user_';
	this.sessionKeyLoggedInUser = this.appName + '_loggedInUser';
    this.sessionKeyActiveList = this.appName + '_activeList';
    this.sessionKeyActiveListName= this.appName + '_activeListName';
    this.textBeingEdited = false;


    var bs = new BrowserStorage();
    var validator = new ModelValidator(bs);


    this.createNewList = function(listName){
        var listsBeingModified = this.getUsersLists();
        listsBeingModified[listName] = [];
        this.saveLists(listsBeingModified);
        this.setActiveList(listName);
    };


    this.editLists = function(){};


    this.getUsersListNames = function(){
        var usersLists = this.getUsersLists();
        if (objectEmpty(usersLists)){
            return [];
        }
        var listNames = Object.keys(usersLists);
        return listNames;
    };


    this.getUsersLists = function(){
        var user = bs.getLocalStorageJSON(this.loggedInUserKey());
        return user.lists;
    };


    this.getSingleListAsObject = function(listName){
        var lists = this.getUsersLists();
        var list = {};
        list[listName] = lists[listName];
        return list;
    };


    this.userHasNoLists = function(){
        var lists = this.getUsersLists();
        return objectEmpty(lists);
    };


    this.saveLists = function(lists){
        bs.modifyLocalStorageJSON(this.loggedInUserKey(), {lists:lists});
    };


    this.saveListItem = function(itemText){
        if (itemText !== this.textBeingEdited){
            this.removeItemFromSavedList(this.textBeingEdited);
        }
        var list = this.getActiveListName();
        var listsBeingModified = this.getUsersLists();
        var listBeingModified = listsBeingModified[list];
        var i = this.indexOfItemBeingModified();
        listBeingModified[i] = itemText;
    };


    this.saveNewListItem = function(itemText){
		var list = this.getActiveListName();
		var listsBeingModified = this.getUsersLists();
		var listBeingModified = listsBeingModified[list];
		listBeingModified.push(itemText);
		listsBeingModified[list] = listBeingModified;
		this.saveLists(listsBeingModified);
	};


    this.getActiveListName = function(){
        var obj = this.getActiveList();
        if (!obj){
            return '';
        }
        var name = Object.keys(obj);
        return name[0];
    };


    this.getActiveList = function(){
        return bs.getSessionStorageJSON(this.sessionKeyActiveList);
    };


    this.setActiveList = function(listName){
        var activeList = this.getSingleListAsObject(listName);
        bs.addToSessionStorageAsJSON(this.sessionKeyActiveList, activeList);
    };


    this.refreshActiveList = function(){
    	var name = this.getActiveListName();
    	this.setActiveList(name);
	};



    this.indexOfItemBeingModified = function(){
        return this.activeList.indexOf(this.textBeingEdited);
    };


    this.removeItemFromSavedList = function(itemText){
        var listItems = this.extractListItemArray();
        var index = listItems.indexOf(itemText);
        listItems.splice(index, 1);
        return listItems;
    };


    this.extractListItemArray = function(){
        var list = this.getActiveList();
        var listItems;
        for (var prop in list){
            listItems = list[prop];
        }
        return listItems;
    };


    this.userKey = function(username){
        return (this.localKeyUserPrefix + username);
    };


    this.loggedInUserKey = function(){
        if (this.loggedInUser === false){
            this.loggedInUser = sessionStorage.getItem(this.sessionKeyLoggedInUser);
        }
        return (this.localKeyUserPrefix + this.loggedInUser);
    };


    this.initialUserData = function(password){
       return  {password:password, lists:{}};
    }


}
