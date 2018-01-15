function NavbarDOM(){

    var ids = new IDs();

    this.appNameForDisplay = 'To-Do\'s';
    this.appNameHeader = $('#' + ids.appNameHeader);
    this.appNameHolder = $('#' + ids.appNameHolder);

    this.dropdownMenus = $('#' + ids.dropdownMenus);

    this.loginAndCreateAccountLinks = $('#' + ids.loginAndCreateAccount);

    this.navbarSearchContainer = $('#' + ids.navbarSearchContainer);


}
