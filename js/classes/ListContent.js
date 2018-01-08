
function ListContent(uim, model){

    this.setListNameHeader = function(){
        var listName = model.getActiveListName();
        if (!listName) listName = 'Choose a list from the Lists menu';
        uim.setListNameHeader(listName);
    };


    this.addNewItemToListOnscreen = function(){
        eGetterSetter.setNewItemText();
        uim.displayNewItemInList();
    };

}
