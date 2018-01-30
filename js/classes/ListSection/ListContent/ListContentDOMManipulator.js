
function ListContentDOMManipulator(){

    var classes = new CSSClasses();
    var dom = new ListContentDOM();
    var state = new ListContentStyleState(dom);
    var rr = new ElementRemoverRevealer();


	this.showActiveList = function(model){
		this.setListNameHeader(model);
		this.displayActiveListItems(model);
	};


	this.emptyListContent = function(){
		dom.listContent.html('');
	};


	this.removeItem = function(obj){
		obj.remove();
	};


    this.setListNameHeader = function(model){
		var listName = model.getActiveListName();
		if (!listName) listName = 'Choose a list from the Lists menu';
		var html = '<header id="list-name-header">' + listName + '</header>';
        dom.listContent.append(html);
    };


    this.undoClickedItem = function(){
        if (state.thereIsAClickedItem()){
            this.turnOffClickedBehavior();
        }
        dom.clickedItem = false;
    };


    this.turnOffClickedBehavior = function(){
        this.removeClickedClass();
        this.makeGlyphsInvisible();
        this.makeItemNotEditable();
    };


    this.removeClickedClass = function(){
        dom.clickedItem.removeClass(classes.clicked);
    };


    this.addNewItemToListOnscreen = function(listItem){
    	var html = this.setNewListItem(listItem);
        this.displayNewItemInList(html);
    };


	this.setNewListItem = function(listItem){

		dom.newListItem = "<li class='" + classes.listItem + "'  draggable='true'>" +
			"<input type='checkbox' class='" + classes.itemCheckbox + "'  " +
			"title='Check box to mark item done, or to perform action on item'>" +
			"<span class='" + classes.highlight + "'> <span class='" +
			classes.itemText + "'>" + listItem + "</span><span " +
			"class='glyphicon " + classes.removeGlyphicon + "  " +
			classes.invisible + "'></span></span></li>";

		return dom.newListItem;
	};


    this.displayNewItemInList = function(html){
        dom.todoList.append(html);
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
        this.makeGlyphsVisible();
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


	this.getItemText = function(listItem){
        return listItem.find('.' + classes.itemText).text();
    };


	this.displayActiveListItems = function(model){
		var listItems = model.extractListItemArray();
		this.displayAllListItems(listItems);
	};


	this.displayAllListItems = function(listItems){
    	if (listItems){
			for (var i=0, innerHtml=''; i < listItems.length; ++i){

				innerHtml += "<li class='" + classes.listItem + "'  draggable='true'>" +
					"<input type='checkbox' class='" + classes.itemCheckbox + "'  " +
					"title='Check box to mark item done, or to perform action on item'>" +
					"<span class='" + classes.highlight + "'> <span class='" +
					classes.itemText + "'>" + listItems[i] + "</span><span " +
					"class='glyphicon " + classes.removeGlyphicon + "  " +
					classes.invisible + "'></span></span></li>";

			}
			innerHtml = '<ul class="todo-list" id="the-todo-list">' + innerHtml + '</ul>';
			dom.listContent.append(innerHtml);
		}

	};


	this.makeGlyphsVisible = function(){
		this.makeRemoveGlyphVisible(dom.clickedItem);
	};


	this.makeRemoveGlyphVisible = function(obj){
		rr.makeVisible( obj.find('.' + classes.removeGlyphicon) );
	};


	this.makeGlyphsInvisible = function(){
		this.makeRemoveGlyphInvisible(dom.clickedItem);
	};


	this.makeRemoveGlyphInvisible = function(obj){
		rr.makeInvisible( obj.find('.' + classes.removeGlyphicon) );
	};



}
