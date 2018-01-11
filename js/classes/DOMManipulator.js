

function DOMManipulator(dom){

    var classes = new CSSClasses();

    var rr = new ElementRemoverRevealer(dom, classes);
    var eGetterSetter = new ElementTextGetterSetter(dom, classes);
    var state = new DOMStyleState(dom, classes);


    this.getLoginValues = function() {
        return eGetterSetter.getLoginValues();
    };


}
