
function ListsMenuEvents(){

	var dom = new ListsMenuDOM();
	var dm = new ListsMenuDOMManipulator(dom);
	var model = new Model();
	var eh = new BaseEventsHelper();


    this.load = function(){

        dom.listsMenu.click(function listsMenuClickHandler(){
            setMenuItemClickHandler();
        });


        function setMenuItemClickHandler(){
        	dm.setListsMenuItem();
            dom.listsMenuItem.click(function(){
                handleViewingSelectedList( $(this).text() );
            });
        }


        function handleViewingSelectedList(listName){
        	model.setCreatingNewList(false);
			model.setActiveList(listName);
			(new ListContent()).reload();
        }

    };


}
