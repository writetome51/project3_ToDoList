
function Content(){

    var ui = new UI();
    var uim = new UIManipulator(ui);
    var cm = new ContentManager();
    var uic = new UIController(ui, uim);

    this.load = function(){
        cm.setContent();
        uic.loadEvents();
    };


}
