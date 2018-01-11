
function NewListForm(dom){

	var dm = new NewListFormDOMManipulator(dom);

    this.load = function(){
        dm.showNecessaryItemsWhenCreatingList();
        dm.removeUnnecessaryItemsWhenCreatingList();
    };

}
