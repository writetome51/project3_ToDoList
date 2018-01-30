
function ListSection(){

	this.load = function(){
		(new ListContent()).load();
		(new ListContentEvents()).load();
		(new NewListItemForm()).load();
		(new NewListItemFormEvents()).load();
	};


}
