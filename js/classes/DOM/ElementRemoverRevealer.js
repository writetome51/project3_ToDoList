

function ElementRemoverRevealer(dom, classes){

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


    this.makeGlyphsVisible = function(){
        this.makeRemoveGlyphVisible(dom.clickedItem);
    };


    this.makeRemoveGlyphVisible = function(obj){
        this.makeVisible( obj.find('.' + classes.removeGlyphicon) );
    };


    this.makeGlyphsInvisible = function(){
        this.makeRemoveGlyphInvisible(dom.clickedItem);
    };


    this.makeRemoveGlyphInvisible = function(obj){
        this.makeInvisible( obj.find('.' + classes.removeGlyphicon) );
    };



}
