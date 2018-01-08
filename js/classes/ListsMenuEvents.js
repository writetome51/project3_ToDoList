
function ListsMenuEvents(ui){

    var model = new Model();


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
            model.setActiveList(listName);
            (new ListContent()).load();
        }

    };


}
