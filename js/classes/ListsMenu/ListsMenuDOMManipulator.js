
function ListsMenuDOMManipulator(dm, model){


    this.createListsMenuItems = function(items){
        this.createListsMenuItems_sub(items);
        this.setListsMenuItem();
    };


    this.setListsMenuItem = function(){
        dom.listsMenuItem = $('.' + classes.listsMenuItem);
    };


    this.showListsMenuItems = function(){
        rr.unCollapse( dom.listsMenuItem);
    };


    this.createListsMenuItems_sub = function(items){
        var innerHtml = this.createListsMenuItemsHTML(items);
        dom.listsMenuItems.html(innerHtml);
    };


    this.createListsMenuItemsHTML = function(items){
        if (items === []){
            return '<li id="no-lists-found">' + this.noListsFound  + '</li>';
        }
        for (var item=0, html='';  item < items.length;  ++item){
            html += '<li><a class="' + classes.listsMenuItem +
                '">' + items[item]  + '</a></li>';
        }
        return html;
    };



}
