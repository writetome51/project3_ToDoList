
function AppState(model){

	this.sessionKeyCreatingNewList = model.appName + '_creatingNewList';


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


	this.setCreatingNewList = function(trueOrFalse){
		sessionStorage.setItem(this.sessionKeyCreatingNewList, String(trueOrFalse))
	};


	this.creatingNewList = function(){
		if ( model.getCreatingNewList() === 'false' ||
			! model.getCreatingNewList()){
			return false;
		}
		else return true;
	};


	this.getCreatingNewList = function(){
		return sessionStorage.getItem(this.sessionKeyCreatingNewList);
	};


}
