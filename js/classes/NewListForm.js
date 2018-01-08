
function NewListForm(ui){

    this.showNewListForm = function(){
        this.showNecessaryItemsWhenCreatingList();
        uim.collapseUnnecessaryItemsWhenCreatingList();
    };


    this.removeUnnecessaryItemsWhenCreatingList = function(){
        uim.collapseUnnecessaryItemsWhenCreatingList();
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
