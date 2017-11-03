
describe('Storage', function(){

    let storage;

    beforeEach(function(){
        storage = new Storage();
    });

    describe('saveCurrentList', function(){

        it('should save the given list as current list', function(){
            let list = {name:'listy', tasks:[]};

            storage.saveCurrentList(list);

            expect(storage.getCurrentList()).toEqual(list);
        });
    });

    describe('saveLists', function(){

        it('should save the given lists', function(){
            let lists = [
                {name:'listy', tasks:[]},
                {name:'listo', tasks:[]}
            ];

            storage.saveLists(lists);

            expect(storage.getLists()).toEqual(lists);

           // expect(typeof storage.getLists()).toEqual('object');
        });
    });

});
