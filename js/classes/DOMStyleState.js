
function DOMStyleState(dom){

    var classes = new CSSClasses();

    this.thereIsAClickedItem = function(){
        if (dom.clickedItem){ return true; }
        else { return false; }
    };


    this.listItemIsAlreadyClicked = function(obj){
        dom.itemToHighlight = obj.parent('.' + classes.highlight);
        return this.thisItemIsAlreadyClicked(dom.itemToHighlight);
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
        return dom.clickedItem.children('.' + classes.itemCheckbox).prop('checked');
    };


}
