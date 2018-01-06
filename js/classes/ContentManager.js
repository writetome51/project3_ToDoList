
function ContentManager(ui, uim){

    var model = new Model();
    var loggedOutContent = new LoggedOutContent(uim);
    var loggedInContent = new LoggedInContent(uim, model);


    this.setContent = function(){
        if (model.loggedOut()){
            loggedOutContent.load();
        }
        else{
            loggedInContent.load();
        }
    };

}
