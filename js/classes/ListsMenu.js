
function ListsMenu(uim, model){

    this.refreshContent = function(){
        var items = model.getUsersListNames();
        uim.createListsMenuItems(items);
    };


}
