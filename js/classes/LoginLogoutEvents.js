
function LoginLogoutEvents(ui, uim){

    var uich = new UIControllerHelper(ui, uim);

    this.load = function(){

        ui.loginForm.submit(function loginSubmitHandler(event){
            event.preventDefault();
            uich.handleLogin();
        });


        ui.logoutLink.click(function logoutLinkHandler(){
            uich.handleLogout();
        });

    };

}
