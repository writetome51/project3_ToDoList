
function NewListForm(){

	var dom = new NewListFormDOM();
	var dm = new NewListFormDOMManipulator(dom);

    this.load = function(){
        dm.showNecessaryItemsWhenCreatingList();
        dm.removeUnnecessaryItemsWhenCreatingList();
    };


}
