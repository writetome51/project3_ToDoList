
function NewListForm(ui){

    this.showNewListForm = function(){
        this.creatingNewList = true;
        this.showNecessaryItemsWhenCreatingList();
        uim.collapseUnnecessaryItemsWhenCreatingList();
    };


    this.removeUnnecessaryItemsWhenCreatingList = function(){
        uim.collapseUnnecessaryItemsWhenCreatingList();
    };


    this.showNecessaryItemsWhenCreatingList = function(){
        if (model.creatingNewList()){
            this.showNecessaryItemsWhenCreatingList_sub();
        }
    };


    this.collapseUnnecessaryItemsWhenCreatingList = function(){
        rr.collapse( $('.collapse-when-creating-list') );
    };


    this.showNecessaryItemsWhenCreatingList_sub = function () {
        rr.unCollapse( $('.show-when-creating-list') );
        rr.makeVisible(  $('.show-when-creating-list') );
        eGetterSetter.emptyNewListNameInput();
    };


}
