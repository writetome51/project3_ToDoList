

function UIManipulator(ui){

    var classes = new CSSClasses();

    var rr = new ElementRemoverRevealer(ui, classes);
    var eGetterSetter = new ElementTextGetterSetter(ui, classes);
    var state = new UIStyleState(ui, classes);


    this.getLoginValues = function() {
        return eGetterSetter.getLoginValues();
    };


    this.removeClickedClass = function(){
        ui.clickedItem.removeClass(classes.clicked);
    };


    this.setListNameHeader = function(listName){
        eGetterSetter.setListNameHeader(listName);
    };


    this.removeItem = function(obj){
        obj.remove();
    };


}
