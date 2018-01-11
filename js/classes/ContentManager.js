
function ContentManager(dom){

    var appState = new AppState();

    this.setContent = function(){
        if (appState.loggedOut()){
            (new LoggedOutContent(dom)).load();
        }
        else{
            (new LoggedInContent(dom)).load();
        }
    };

}
