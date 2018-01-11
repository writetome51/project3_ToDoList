
function ListContent(listName){

    var model = new Model();
    model.setActiveList(listName);

    var lcdm = new ListContentDOMManipulator(model);


    this.load = function(){

        lcdm.setListNameHeader();


    };

}
