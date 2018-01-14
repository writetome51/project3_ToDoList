
function LoginLogoutEvents(){

	var dom = new LoginLogoutDOM();
    var eh = new LoginLogoutEventsHelper(dom);

    this.load = function(){

        dom.loginForm.submit(function loginSubmitHandler(event){
            event.preventDefault();
            eh.handleLogin();
        });


        dom.logoutLink.click(function logoutLinkHandler(){
            eh.handleLogout();
        });

    };

}
