
function ContentManager(){

	var model = new Model();
    var appState = new AppState(model);

    this.setContent = function(){
        if (appState.loggedOut()){
            (new LoggedOutContent()).load();
        }
        else{
            (new LoggedInContent()).load();
        }
    };

}
