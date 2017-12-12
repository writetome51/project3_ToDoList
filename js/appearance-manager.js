
function AppearanceManager(uim, model){

    this.creatingNewList = false;


    this.setAppearance = function(){
        if (model.loggedOut()){
            uim.showLoggedOutContent();
        }
        else{
            uim.showLoggedInContent();
        }
    };


}
