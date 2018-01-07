
function ListsMenu(ui, uim, model){


    this.refreshListsMenu = function(){
        this.refreshListsMenuContent();
    };


    this.refreshListsMenuContent = function(){
        var items = model.getUsersListNames();
        uim.createListsMenuItems(items);
    };


    this.loadEvents = function(){

        ui.listsMenu.click(function listsMenuClickHandler(){
            setMenuItemClickHandler();
        });


        function setMenuItemClickHandler(){
            ui.listsMenuItem.click(function(){
                handleViewingSelectedList( $(this).text() );
            });
        }


        function handleViewingSelectedList(listName){
            model.setActiveList(listName);
            (new ListContent()).load();
        }

    };


}
