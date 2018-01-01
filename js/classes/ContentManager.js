
function ContentManager(){

    var ui = new UI();
    var uim = new UIManipulator(ui);
    var uic = new UIController(ui, uim);
    var model = new Model();
    var srr = new SectionRemoverRevealer(ui);


    this.creatingNewList = false;
    this.creatingNewListItem = false;


    this.setContent = function(){
        if (model.loggedOut()){
            this.showLoggedOutContent();
        }
        else{
            this.showLoggedInContent();
        }
    };


    this.showLoggedOutContent = function(){
        this.removeUnnecessaryItemsWhenLoggedOut();
        uim.showNecessaryItemsWhenLoggedOut();
    };



    this.showLoggedInContent = function(){
        this.removeUnnecessaryItemsWhenLoggedIn();
        this.showNecessaryItemsWhenLoggedIn();
    };


    this.refreshListsMenu = function(){
        this.refreshListsMenuContent();
        this.refreshListsMenuBehavior();
    };


    this.refreshListsMenuContent = function(){
        var items = model.getUsersListNames();
        uim.createListsMenuItems(items);
        uim.setListsMenuItem();
    };


    this.setListNameHeader = function(){
        var listName = model.getActiveListName();
        if (!listName) listName = 'Choose a list from the Lists menu';
        uim.setListNameHeader(listName);
    };



    this.showNewListForm = function(){
        this.creatingNewList = true;
        this.showNecessaryItemsWhenCreatingList();
        this.collapseUnnecessaryItemsWhenCreatingList();
    };



}
