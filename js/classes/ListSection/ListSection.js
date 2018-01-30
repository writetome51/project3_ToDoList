
function ListSection(){

	this.load = function(){
		(new ListContent()).load();
		(new ListContentEvents()).load();
		(new NewListItemFormEvents()).load();
	};


}
