
function ListContentDOMManipulator(dm, model){

    var classes = new CSSClasses();
    var state = new DOMStyleState(dom);


	this.removeItem = function(obj){
		obj.remove();
	};


    this.setListNameHeader = function(){
        var listName = model.getActiveListName();
        if (!listName) listName = 'Choose a list from the Lists menu';
        this.setListNameHeader_sub(listName);
    };


    this.setListNameHeader_sub = function(listName){
        dom.listNameHeader.text(listName);
    };


    this.undoClickedItem = function(){
        if (state.thereIsAClickedItem()){
            this.turnOffClickedBehavior();
        }
        dom.clickedItem = false;
    };


    this.turnOffClickedBehavior = function(){
        this.removeClickedClass();
        rr.makeGlyphsInvisible();
        this.makeItemNotEditable();
    };


    this.removeClickedClass = function(){
        dom.clickedItem.removeClass(classes.clicked);
    };


    this.addNewItemToListOnscreen = function(){
        this.setNewItemText();
        dm.displayNewItemInList();
    };


    this.displayNewItemInList = function(){
        dom.todoList.append(dom.newListItem);
    };


    this.makeItemEditable = function(obj){
        var currentItemText = obj.children('.' + classes.itemText);
        currentItemText.attr("contenteditable", "true");
    };


    this.makeItemNotEditable = function(){
        dom.clickedItem.children('.' + classes.itemText)
            .removeAttr('contenteditable');
    };


    this.getEntireListItem = function(removeGlyph){
        return removeGlyph.closest('.' + classes.listItem);
    };


    this.setClickedItem = function(obj){
        dom.itemToHighlight = obj.parent('.' + classes.highlight);
        dom.clickedItem = dom.itemToHighlight;
        this.removeHoverClassAndAddClickedClass(dom.clickedItem);
        rr.makeGlyphsVisible();
        this.makeItemEditable(dom.clickedItem);
    };


    this.removeHoverClassAndAddClickedClass = function(obj){
        obj.removeClass(classes.hovered);
        obj.addClass(classes.clicked);
    };


    this.removeHoveredClassFromListItem = function(obj){
        dom.itemToHighlight = obj.parent('.' + classes.highlight);
        dom.itemToHighlight.removeClass(classes.hovered);
    };


    this.addHoveredClassToListItem = function(obj){
        dom.itemToHighlight = obj.parent('.' + classes.highlight);
        dom.itemToHighlight.addClass(classes.hovered);
    };


    this.setNewItemText = function(){
        dom.newItemText = dom.newListItemTextInput.val();
    };


    this.getNewItemText = function(){
        return dom.newItemText;
    };


    this.getItemText = function(listItem){
        return listItem.find('.' + classes.itemText).text();
    };


    this.setNewListItem = function(){

		dom.newListItem = "<li class='" + classes.listItem + "'  draggable='true'>" +
			"<input type='checkbox' class='" + classes.itemCheckbox + "'  " +
			"title='Check box to mark item done, or to perform action on item'>" +
			"<span class='" + classes.highlight + "'> <span class='" +
			classes.itemText + "'>" + dom.newItemText + "</span><span " +
			"class='glyphicon " + classes.removeGlyphicon + "  " +
			classes.invisible + "'></span></span></li>";

	};




}
