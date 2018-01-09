
function ListsMenu(uim, model){

    this.load = function(){
        var items = model.getUsersListNames();
        uim.createListsMenuItems(items);
    };


}
