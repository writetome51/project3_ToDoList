
function ListsMenuDOMManipulator(dom){

	var classes = new CSSClasses();
	var ids = new IDs();

    this.createListsMenuItems = function(items){
        this.createListsMenuItems_sub(items);
        this.setListsMenuItem();
    };


	this.createListsMenuItems_sub = function(items){
		var innerHtml = this.createListsMenuItemsHTML(items);
		dom.listsMenuItems.html(innerHtml);
	};


	this.setListsMenuItem = function(){
        dom.listsMenuItem = $('.' + classes.listsMenuItem);
    };


    this.showListsMenuItems = function(){
        rr.unCollapse( dom.listsMenuItem);
    };


    this.createListsMenuItemsHTML = function(items){
        if (items === [] || items.length === 0){
        	return ('<li id="no-lists-found">' + dom.noListsFound  + '</li>');
        }
        for (var item=0, html='';  item < items.length;  ++item){
            html += '<li><a class="' + classes.listsMenuItem +
                '">' + items[item]  + '</a></li>';
        }
        return html;
    };



}
