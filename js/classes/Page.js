
function Page(){

    var dom = new DOM();
    var dc = new DOMController(dom);
    var cm = new ContentManager(dom);

    this.load = function(){
        cm.setContent();
        dc.loadEvents();
    };

}
