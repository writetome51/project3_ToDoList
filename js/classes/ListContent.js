
function ListContent(listName){

    var model = new Model();
    model.setActiveList(listName);

    var lcuim = new ListContentUIManipulator(model);

    this.load = function(){

    };

}
