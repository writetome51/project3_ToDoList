
function ListsMenuEvents(){

	var dom = new ListsMenuDOM();


    this.load = function(){

        dom.listsMenu.click(function listsMenuClickHandler(){
            setMenuItemClickHandler();
        });


        function setMenuItemClickHandler(){
            dom.listsMenuItem.click(function(){
                handleViewingSelectedList( $(this).text() );
            });
        }


        function handleViewingSelectedList(listName){
            (new ListContent(listName)).load();
        }

    };


}
