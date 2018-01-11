
function LoginLogoutEvents(dom, dm){

    var dmch = new DOMControllerHelper(dom, dm);

    this.load = function(){

        dom.loginForm.submit(function loginSubmitHandler(event){
            event.preventDefault();
            dmch.handleLogin();
        });


        dom.logoutLink.click(function logoutLinkHandler(){
            dmch.handleLogout();
        });

    };

}
