
function ListsMenuEvents(){

	var dom = new ListsMenuDOM();
	var dm = new ListsMenuDOMManipulator(dom);


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
            (new ListContent(listName)).load();
        }

    };


}
