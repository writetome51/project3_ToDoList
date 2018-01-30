
function ListContentDOMManipulator(dom){

    var classes = new CSSClasses();
    var state = new ListContentStyleState(dom);
    var rr = new ElementRemoverRevealer();


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


    this.addNewItemToListOnscreen = function(){
        this.setNewItemText();
        this.displayNewItemInList();
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


    this.setNewItemText = function(){
        dom.newItemText = dom.newListItemTextInput.val();
    };


    this.getNewItemText = function(){
        return dom.newListItemTextInput.val();
    };


    this.getItemText = function(listItem){
        return listItem.find('.' + classes.itemText).text();
    };


    this.addNewListItemForm = function(){
    	var innerHtml = '<form id="new-list-item-form"><div class="navbar-div"><div class="navbar-div top-navbar-search-container"><input type="text" id="new-item-text-input" class="form-control" placeholder="Add item to list" required  minlength="1" ></div> <div class="form-submit  navbar-div  add-item-button"><input type="submit" value="Add"></div></div></form>';

    	dom.listContent.append(innerHtml);
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


    this.setNewListItem = function(){

		dom.newListItem = "<li class='" + classes.listItem + "'  draggable='true'>" +
			"<input type='checkbox' class='" + classes.itemCheckbox + "'  " +
			"title='Check box to mark item done, or to perform action on item'>" +
			"<span class='" + classes.highlight + "'> <span class='" +
			classes.itemText + "'>" + dom.newItemText + "</span><span " +
			"class='glyphicon " + classes.removeGlyphicon + "  " +
			classes.invisible + "'></span></span></li>";

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
