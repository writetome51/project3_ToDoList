
function NewListForm(dom){

    this.load = function(){
        this.showNecessaryItemsWhenCreatingList();
        dm.collapseUnnecessaryItemsWhenCreatingList();
    };


    this.removeUnnecessaryItemsWhenCreatingList = function(){
        dm.collapseUnnecessaryItemsWhenCreatingList();
    };


    this.showNecessaryItemsWhenCreatingList = function(){
        rr.unCollapse( $('.show-when-creating-list') );
        rr.makeVisible(  $('.show-when-creating-list') );
        eGetterSetter.emptyNewListNameInput();
    };


    this.collapseUnnecessaryItemsWhenCreatingList = function(){
        rr.collapse( $('.collapse-when-creating-list') );
    };


}
