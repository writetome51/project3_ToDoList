var appName = 'todoList';
var appData = '';

if (localStorage.getItem(appName) == null){
    localStorage.setItem(appName,
        JSON.stringify(
            {
                users:{
                    'fakeUser':{
                        password:'Blah1234',
                        lists:
                            {
                                'Things to do in San Francisco': [
                                    'buy fancy shoes',
                                    'drive on lombard street',
                                    'eat at harry chu\'s',
                                    'slap a liberal',
                                    'attend opera',
                                    'giants game'
                                ],

                                'Grocery List':[
                                    'milk',
                                    'cookies',
                                    'bread',
                                    'soup'
                                ],

                                'Cars to test-drive':[
                                    'Dodge Charger',
                                    'Chevy Malibu',
                                    'Ford Gran Torino'
                                ]
                            }

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

