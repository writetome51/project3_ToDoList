
function ContentManager(dom){

    var model = new Model();

    this.setContent = function(){
        if (model.loggedOut()){
            (new LoggedOutContent(dom)).load();
        }
        else{
            (new LoggedInContent(dom, model)).load();
        }
    };

}
