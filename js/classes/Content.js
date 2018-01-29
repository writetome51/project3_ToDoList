
function Content(){

	var model = new Model();
    var appState = new AppState(model);

    this.load = function(){
        if (appState.loggedOut()){
            (new LoggedOutContent()).load();
        }
        else{
            (new LoggedInContent()).load();
        }
    };

}
