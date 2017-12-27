

function ElementRemoverRevealer(ui, classes){

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
        this.makeRemoveGlyphVisible(ui.clickedItem);
    };


    this.makeRemoveGlyphVisible = function(obj){
        this.rr.makeVisible( obj.find('.' + classes.removeGlyphicon) );
    };


    this.makeGlyphsInvisible = function(){
        this.makeRemoveGlyphInvisible(ui.clickedItem);
    };
   

    this.makeRemoveGlyphInvisible = function(obj){
        this.rr.makeInvisible( obj.find('.' + classes.removeGlyphicon) );
    };



}