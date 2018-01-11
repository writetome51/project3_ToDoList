
function Page(){

    var dom = new DOM();
    var dm = new DOMManipulator(dom);
    var dc = new DOMController(dom, dm);
    var cm = new ContentManager(dom);

    this.load = function(){
        cm.setContent();
        dc.loadEvents();
    };

}
