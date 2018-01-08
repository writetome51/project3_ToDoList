
function ListsMenuEvents(ui){


    this.load = function(){

        ui.listsMenu.click(function listsMenuClickHandler(){
            setMenuItemClickHandler();
        });


        function setMenuItemClickHandler(){
            ui.listsMenuItem.click(function(){
                handleViewingSelectedList( $(this).text() );
            });
        }


        function handleViewingSelectedList(listName){
            (new ListContent(listName)).load();
        }

    };


}
