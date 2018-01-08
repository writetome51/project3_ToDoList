
function ListContentUIManipulator(uim, model){

    this.undoClickedItem = function(){
        if (state.thereIsAClickedItem()){
            this.turnOffClickedBehavior();
        }
        ui.clickedItem = false;
    };


    this.turnOffClickedBehavior = function(){
        this.removeClickedClass();
        rr.makeGlyphsInvisible();
        this.makeItemNotEditable();
    };


    this.setListNameHeader = function(){
        var listName = model.getActiveListName();
        if (!listName) listName = 'Choose a list from the Lists menu';
        uim.setListNameHeader(listName);
    };


    this.addNewItemToListOnscreen = function(){
        eGetterSetter.setNewItemText();
        uim.displayNewItemInList();
    };


    this.displayNewItemInList = function(){
        ui.todoList.append(ui.newListItem);
    };


    this.makeItemEditable = function(obj){
        var currentItemText = obj.children('.' + classes.itemText);
        currentItemText.attr("contenteditable", "true");
    };


    this.makeItemNotEditable = function(){
        ui.clickedItem.children('.' + classes.itemText)
            .removeAttr('contenteditable');
    };


    this.getEntireListItem = function(removeGlyph){
        return removeGlyph.closest('.' + classes.listItem);
    };


    this.setClickedItem = function(obj){
        ui.itemToHighlight = obj.parent('.' + classes.highlight);
        ui.clickedItem = ui.itemToHighlight;
        this.removeHoverClassAndAddClickedClass(ui.clickedItem);
        rr.makeGlyphsVisible();
        this.makeItemEditable(ui.clickedItem);
    };


    this.removeHoverClassAndAddClickedClass = function(obj){
        obj.removeClass(classes.hovered);
        obj.addClass(classes.clicked);
    };


    this.removeHoveredClassFromListItem = function(obj){
        ui.itemToHighlight = obj.parent('.' + classes.highlight);
        ui.itemToHighlight.removeClass(classes.hovered);
    };


    this.addHoveredClassToListItem = function(obj){
        ui.itemToHighlight = obj.parent('.' + classes.highlight);
        ui.itemToHighlight.addClass(classes.hovered);
    };



}
