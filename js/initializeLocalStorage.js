var appName = 'todoList';
var appData = '';

if (localStorage.getItem(appName) == null){
    localStorage.setItem(appName,
        JSON.stringify(
            {
                users:{
                    'fakeUser':{
                        password:'Blah1234',
                        lists:[
                            {
                                name:'Things to do in San Francisco',
                                items:[
                                    'buy fancy shoes',
                                    'drive on lombard street',
                                    'eat at harry chu\'s',
                                    'slap a liberal',
                                    'attend opera',
                                    'giants game'
                                ]
                            },
                            {
                                name:'Grocery List',
                                items:[
                                    'milk',
                                    'cookies',
                                    'bread',
                                    'soup'
                                ]
                            },
                            {
                                name:'Cars to test-drive',
                                items:[
                                    'Dodge Charger',
                                    'Chevy Malibu',
                                    'Ford Gran Torino'
                                ]
                            }
                        ]
                    }

                }

            }
        )
    );
}

loadInitialPageData();


function loadInitialPageData(){
    appData = JSON.parse(localStorage.getItem(appName));
}

