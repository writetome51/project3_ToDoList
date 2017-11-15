//For debugging:
if (getLocalStorageJSON(localKeyUserPrefix + 'fakeUser') == null){
    var data = {
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

    };

    addToLocalStorageAsJSON(localKeyUserPrefix + 'fakeUser', data);
}


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


