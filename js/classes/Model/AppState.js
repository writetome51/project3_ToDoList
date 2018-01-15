
function AppState(model){


	this.loggedOut = function(){
		return (!this.loggedIn());
	};


	this.loggedIn = function(){
		var sessionData = sessionStorage.getItem(model.sessionKeyLoggedInUser);
		if ( ! sessionData){ return false;}
		else return true;
	};


	this.noActiveList = function(){
		if ( ! model.getActiveList()){
			return true;
		}
		else return false;
	};


	this.creatingNewList = function(){
		if ( model.getCreatingNewList() === 'false' ||
			! model.getCreatingNewList()){
			return false;
		}
		else return true;
	};


}