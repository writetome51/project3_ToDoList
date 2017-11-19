

function TodosViewManipulator(ui, model){


    this.undoClickedItem = function(){
        if (this.thereIsAClickedItem()){
            ui.clickedItem.removeClass(ui.clickedClass);
            this.makeGlyphsInvisible();
            this.makeItemNotEditable(ui.clickedItem);
        }
        ui.clickedItem = false;
    };



    this.makeThisItemTheClickedItem = function(obj){
        ui.itemToHighlight = obj.parent('.' + ui.highlightClass);
        this.undoClickedItem();
        this.setClickedItem(ui.itemToHighlight);
    };


    this.setClickedItem = function(obj){
        ui.clickedItem = obj;
        this.removeHoverClassAndAddClickedClass(ui.clickedItem);
        this.makeGlyphsVisible();
        this.makeItemEditable(ui.clickedItem);
    };


    this.listItemIsAlreadyClicked = function(obj){
        this.itemToHighlight = obj.parent('.' + this.highlightClass);
        return this.thisItemIsAlreadyClicked(this.itemToHighlight);
    };


    this.listItemIsNotClicked = function(obj){
        return  ( ! this.listItemIsAlreadyClicked(obj));
    };


    this.thisItemIsAlreadyClicked = function(obj){
        return  obj.hasClass(this.clickedClass);
    };


    this.makeGlyphsVisible = function(){
        this.makeRemoveGlyphVisible(this.clickedItem);
        this.makePencilGlyphVisible(this.clickedItem);
    };


    this.makeGlyphsInvisible = function(){
        this.makeRemoveGlyphInvisible(this.clickedItem);
        this.makePencilGlyphInvisible(this.clickedItem);
    };


    this.makeRemoveGlyphVisible = function(obj){
        obj.find('.' + this.removeGlyphiconClass).removeClass(this.invisibleClass);
    };


    this.makeRemoveGlyphInvisible = function(obj){
        obj.find('.' + this.removeGlyphiconClass).addClass(this.invisibleClass);
    };


    this.makePencilGlyphInvisible = function(obj){
        obj.find('.' + this.pencilGlyphiconClass).addClass(this.invisibleClass);
    };


    this.makePencilGlyphVisible = function(obj){
        obj.find('.' + this.pencilGlyphiconClass).removeClass(this.invisibleClass);
    };


    this.makeItemEditable = function(obj){
        var currentItemText = obj.children('.' + this.itemTextClass);
        currentItemText.attr("contenteditable", "true");
    };


    this.makeItemNotEditable = function(obj){
        obj.children('.' + this.itemTextClass).removeAttr('contenteditable');
    };


    this.thereIsAClickedItem = function(){
        if (ui.clickedItem){ return true; }
        else { return false; }
    };


    this.removeHoverClassAndAddClickedClass = function(obj){
        obj.addClass(this.clickedClass);
        obj.removeClass(this.hoveredClass);
    };


    this.addHoveredClassToListItem = function(obj){
        this.itemToHighlight = obj.parent('.' + this.highlightClass);
        this.itemToHighlight.addClass(this.hoveredClass);
    };


    this.removeHoveredClassFromListItem = function(obj){
        this.itemToHighlight = obj.parent('.' + this.highlightClass);
        this.itemToHighlight.removeClass(this.hoveredClass);
    };


    this.clickedItemCheckboxIsChecked = function(){
        return this.clickedItem.children('.' + this.itemCheckboxClass).prop('checked');
    };


    this.removeListItem = function(item){
        item.parents('.' + this.listItemClass).remove();
    };


    this.setAppearance = function(){

        if (model.notLoggedIn()){
            showNecessaryItemsWhenLoggedOut();
            removeUnnecessaryItemsWhenLoggedOut();
            setLoggedOutHeader();
        }

        else if (model.loggedIn()){
            this.showNecessaryItemsWhenLoggedIn();
            this.removeUnnecessaryItemsWhenLoggedIn();
            this.setLoggedInHeader();
        }
    };


    this.showNecessaryItemsWhenLoggedIn = function(){
        $('#logout-link-container').removeClass(this.invisibleCollapsedClass);
        $('#dropdown-menus').removeClass(this.invisibleClass);
        this.newListItemForm.removeClass(this.invisibleCollapsedClass);
        this.navbarSearchContainer.removeClass(this.invisibleCollapsedClass);
    };


    this.showNecessaryItemsWhenLoggedOut = function(){
        $('#login-and-create-account').removeClass(this.invisibleCollapsedClass);
    };


    this.removeUnnecessaryItemsWhenLoggedIn = function(){
        $('#login-and-create-account').addClass(this.invisibleCollapsedClass);
    };


    this.removeUnnecessaryItemsWhenLoggedOut = function(){
        $('#logout-link-container').addClass(this.invisibleCollapsedClass);
        $('#dropdown-menus').addClass(this.invisibleClass);
        this.newListItemForm.addClass(this.invisibleCollapsedClass);
        this.navbarSearchContainer.addClass(this.invisibleCollapsedClass);
    };


    this.setLoggedOutHeader = function(){
        this.appNameHolder.addClass('welcome-to-app-name');
        $('#app-name').text('Welcome to ' + this.appNameForDisplay);
    };


    this.setLoggedInHeader = function(){
        this.appNameHolder.removeClass('welcome-to-app-name');
        $('#app-name').text(this.appNameForDisplay);
    };


}
