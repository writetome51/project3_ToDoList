
function UIStyleState(ui){

    var classes = new CSSClasses();

    this.thereIsAClickedItem = function(){
        if (ui.clickedItem){ return true; }
        else { return false; }
    };


    this.listItemIsAlreadyClicked = function(obj){
        ui.itemToHighlight = obj.parent('.' + classes.highlight);
        return this.thisItemIsAlreadyClicked(ui.itemToHighlight);
    };


    this.listItemIsNotClicked = function(obj){
        return  ( ! this.listItemIsAlreadyClicked(obj));
    };


    this.thisItemIsAlreadyClicked = function(obj){
        return  obj.hasClass(classes.clicked);
    };


    this.hasHoveredClass = function(obj){
        return (obj.hasClass(classes.hovered));
    };


    this.notHoveredAndNotClicked = function(obj){
        return ((! obj.hasClass(classes.hovered)) &&
            (! obj.hasClass(classes.clicked)));
    };


    this.clickedItemCheckboxIsChecked = function(){
        return ui.clickedItem.children('.' + classes.itemCheckbox).prop('checked');
    };


}
