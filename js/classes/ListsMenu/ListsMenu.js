
function ListsMenu(dm, model){

    this.load = function(){
        var items = model.getUsersListNames();
        dm.createListsMenuItems(items);
    };


}
