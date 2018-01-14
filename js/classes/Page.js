
function Page(){

    var dc = new DOMController();
    var cm = new ContentManager();

    this.load = function(){
        cm.setContent();
        dc.loadEvents();
    };

}
