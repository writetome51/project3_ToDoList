
function ContentManagerHelper(){


    this.refreshListsMenu = function(){
        this.refreshListsMenuContent();
        this.refreshListsMenuBehavior();
    };


    this.refreshListsMenuContent = function(){
        var items = model.getUsersListNames();
        uim.createListsMenuItems(items);
        uim.setListsMenuItem();
    };


    this.refreshListsMenuBehavior = function(){
        this.setlistsMenuItemClickHandler(this);
    };


    this.setlistsMenuItemClickHandler = function(me){
        ui.listsMenuItem.click(function(){
            me.handleViewingSelectedList( $(this).text() );
        });
    };


    this.handleViewingSelectedList = function(listName){
        model.setActiveList(listName);
        cm.setContent();
    };


}



