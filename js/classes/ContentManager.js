
function ContentManager(){

    var ui = new UI();
    var uim = new UIManipulator(ui);
    var uic = new UIController(ui, uim);
    var model = new Model();
    var loggedOutContent = new LoggedOutContent(uim);
    var loggedInContent = new LoggedInContent(uim, model);


    this.creatingNewList = false;
    this.creatingNewListItem = false;


    this.setContent = function(){
        if (model.loggedOut()){
            loggedOutContent.load();
        }
        else{
            loggedInContent.load();
        }
    };

}
