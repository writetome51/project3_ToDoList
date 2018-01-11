
function ListContent(listName){

	listName = listName || null;

    var model = new Model();
    model.setActiveList(listName);

    var dm = new ListContentDOMManipulator(model);


    this.load = function(){

        dm.setListNameHeader();


    };

}
