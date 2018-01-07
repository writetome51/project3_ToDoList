
function Page(){

    var ui = new UI();
    var uim = new UIManipulator(ui);
    var uic = new UIController(ui, uim);
    var cm = new ContentManager(ui, uim);

    this.load = function(){
        cm.setContent();
        uic.loadEvents();
    };

}
