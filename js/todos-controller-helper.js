
function ControllerHelper(ui, uim){

    this.makeClickedItem = function(obj){
        if (uim.listItemIsNotClicked(obj)){
            uim.undoClickedItem();
            uim.setClickedItem(obj);
        }
    };


    this.toggleHover = function(obj){
        if (uim.hasHoveredClass(obj)){
            uim.removeHoveredClassFromListItem(obj);
        }
        else if (uim.notHoveredAndNotClicked(obj)){
            uim.addHoveredClassToListItem(obj);
        }
    };


    this.handleItemDoubleClick = function(obj){
        if (uim.listItemIsAlreadyClicked(obj)){
            uim.undoClickedItem();
        }
    };

}
