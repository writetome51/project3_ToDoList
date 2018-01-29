
function Page(){

    this.load = function(){
		(new Content()).load();
		(new Behavior()).load();
    };

}
