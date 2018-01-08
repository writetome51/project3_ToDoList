
function ListsMenuUIManipulator(uim, model){


    this.createListsMenuItems = function(items){
        eGetterSetter.createListsMenuItems(items);
        this.setListsMenuItem();
    };


    this.setListsMenuItem = function(){
        ui.listsMenuItem = $('.' + classes.listsMenuItem);
    };


    this.showListsMenuItems = function(){
        rr.unCollapse( ui.listsMenuItem);
    };


}
