
class Storage{
    constructor(){
        this.CURRENT_LIST_KEY = 'currentList';
      //  this.list = {};
    }

    saveCurrentList(list){
        localStorage.setItem(this.CURRENT_LIST_KEY, JSON.stringify(list));
        this.list = list;
    }

    getCurrentList(){
        return JSON.parse( localStorage.getItem(this.CURRENT_LIST_KEY) );
    }
}
