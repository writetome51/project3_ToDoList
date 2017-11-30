// For background-data manipulation.

function TodosModel(){

    this.appName = 'todosApp';
    this.appData = '';
    this.activeList = false;

    // Each user gets its own localStorage key, which begins with this prefix:
    this.localKeyUserPrefix = this.appName + '_user_';
    this.loggedInUser = false;

    this.sessionKeyLoggedInUser = this.appName + '_loggedInUser';
    this.sessionKeyActiveList = this.appName + '_activeList';
    this.textBeingEdited = false;
    this.noListsFound = 'No Lists';

    var bs = new BrowserStorage();
    var validator = new TodosModelValidator(bs);


    this.newAccountInfoValid = function(username, password1, password2){
        return validator.newAccountInfoValid(username, password1, password2);
    };


    this.createAccount = function(username, password){
        var newUser = this.userKey(username);
        bs.addToLocalStorageAsJSON(newUser, initialUserData(password));
    };


    this.login = function(username, password){
        if (validator.loginValid(username, this.userKey(username), password)){
            this.loggedInUser = username;
            sessionStorage.setItem(this.sessionKeyLoggedInUser, this.loggedInUser);
        }
    };


    this.logout = function(){
        sessionStorage.removeItem(this.sessionKeyLoggedInUser);
        this.loggedInUser = false;
    };


    this.loggedOut = function(){
        return (!this.loggedIn());
    };


    this.loggedIn = function(){
        var sessionData = sessionStorage.getItem(this.sessionKeyLoggedInUser);
        if ( ! sessionData){ return false;}
        else return true;
    };


    this.createNewList = function(listName){
        var listsBeingModified = this.getUsersLists();
        listsBeingModified[listName] = [];
        this.saveLists(listsBeingModified);
        this.setActiveList(listName);
    };


    this.editLists = function(){};


    this.getAllListsMenuItems = function(){
        var items = this.getUsersListNames();
        if (items === this.noListsFound){
            return '<li id="no-lists-found">' + this.noListsFound  + '</li>';
        }
        for (var item=0, html='';  item < items.length;  ++item){
            html += '<li><a class="list-menu-item">' + items[item]  + '</a></li>';
        }
        return html;
    };


    this.getUsersListNames = function(){
        var usersLists = this.getUsersLists();
        if (objectEmpty(usersLists)){
            return this.noListsFound;
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


    this.saveListItem = function(itemText, list){
        if (itemText !== this.textBeingEdited){
            this.removeItemFromSavedList(this.textBeingEdited);
        }

        var listsBeingModified = this.getUsersLists();
        var listBeingModified = listsBeingModified[list];
        var i = this.indexOfItemBeingModified();
        listBeingModified[i] = itemText;
    };


    this.getActiveListName = function(){
        var obj = this.getActiveList();
        var name = Object.keys(obj);
        return name[0];
    };


    this.getActiveList = function(){
        return sessionStorage.getItem(this.sessionKeyActiveList);
    };


    this.setActiveList = function(listName){
        this.activeList = this.getSingleListAsObject(listName);
        bs.addToSessionStorageAsJSON(this.sessionKeyActiveList, this.activeList);
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


    function initialUserData(password){
       return  {password:password, lists:{}};
    }


}
