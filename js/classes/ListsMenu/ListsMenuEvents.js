
function ListsMenuEvents(){

	var dom = new ListsMenuDOM();
	var dm = new ListsMenuDOMManipulator(dom);
	var model = new Model();
	var state = new AppState(model);
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
        	state.setCreatingNewList(false);
			model.setActiveList(listName);
			(new ListContent()).reload();
			(new ListContentEvents()).load();
        }

    };


}
