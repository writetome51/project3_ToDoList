
function ContentManager(ui, uim){

    var model = new Model();

    this.setContent = function(){
        if (model.loggedOut()){
            (new LoggedOutContent(uim)).load();
        }
        else{
            (new LoggedInContent(uim, model)).load();
        }
    };

}
