

function ElementRemoverRevealer(){

	var classes = new CSSClasses();

    this.collapse = function(obj){
        obj.addClass(classes.invisibleCollapsed);
    };


    this.unCollapse = function(obj){
        obj.removeClass(classes.invisibleCollapsed);
    };


    this.makeInvisible = function(obj){
        obj.addClass(classes.invisible);
    };


    this.makeVisible = function(obj){
        obj.removeClass(classes.invisible);
    };


}
