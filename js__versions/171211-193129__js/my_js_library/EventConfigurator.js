/*
This class is for adding event attributes to elements in the DOM.

 parameter 'configurations' is an array of configuration objects.  See explanation below.
 */

function EventConfigurator(configurations){

    // The only public function.
	this.configure = function(){
		configurations.forEach(setupConfiguration);
	};
	
	
  /***** 	EXPLANATION of configuration objects.
               A configuration object needs these properties:
		{
                    elements: getElementsByIDs(arrayOfIDs),
                    eventsToAdd: arrayOfEvents,
                    eventFunctions: arrayOfFunctionsToAttachToEvents
		}

            All the eventsToAdd will be attached to each of the elements.
            All the eventFunctions will be attached to each of the eventsToAdd,
            in the order you list them.
            Each eventFunction is able to access the element's properties because
            it is turned into a method attached to the element.
		    If an eventFunction needs to have the event parameter passed in,
		    have the event function be an anonymous function that takes the event,
		    and passes it to the intended function, like so:
		        function(event){
		            intendedEventFunction(event);
		        }
*****/


    function setupConfiguration(configuration){

        configuration.elements.forEach(

            function addEventsTo(element){

                element.addEventListeners = addEventListeners;
                element.addEventListeners(
                    configuration.eventsToAdd,
                    configuration.eventFunctions
                );
            }
        );
    }



    // Will be used as an element object method:
    function addEventListeners(events, eventFunctions){
        for (var event=0;  event < events.length;  ++event){
	    this.addFunctionsToEvent =  addFunctionsToEvent;
            this.addFunctionsToEvent(events[event], eventFunctions);
        }
    }


    // Will be used as an element object method:
	function addFunctionsToEvent(event, eventFunctions){
		for (var i=0;  i < eventFunctions.length;  ++i){
			this.eventFunction = eventFunctions[i]; // 'this' refers to element object.
			this.addEventListener(event,  this.eventFunction);
		}
	}


}
