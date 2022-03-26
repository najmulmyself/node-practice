// const Events = require('events'); // this simply return a class , and class name should be in capital form
// const startEvent = require('./exportEvent');

// const event = new Events();

const BellEvent = require('./exportEvent'); 

// need to declare emitter/listener  so that when event happened listener responses.
const bellEvent = new BellEvent();
bellEvent.on('bellRing', ()=>{
    console.log('Event fired')
})




// raise an event

// event.emit('bellRing'); // moved to another file
bellEvent.startBellEvent();

// what if we want to raise/(simply make an event like click the mouse btn) the event happen for  multiple files?



//  HERE THE PROBLEM IS WE USE TWO DIFFRENT OBJECT BLUEPRIT FOR EACTH FILE.

// WE DECLARED AN EVENT WITH AN OBJECT AND RAISE AN EVENT WITH ANOTHER ONE | HERE'S THE CONFLICT

// SO WE NEED TO MAKE ALL THIS WITH A SINGLE CLASS WHEREAS THAT SINGLE CLASS OPERATES BOTH OF THE EVENTS

// HOW DO WE ACHIVE THAT? 

// STEP 1: 

    // WE NEED TO MAKE A CLASS | INSIDE THIS CLASS WE WILL RAISE  THE EVENT 

// STEP : 2
    // EXPORT THE CLASS 

// STEP: 3
    //CREATE AN INSTANCE OF THIS CLASS WHERE WE WANT TO FIRE THE EVENT | THEN ALL THE POSSIBLE THINGS WILL HAPPEN WITH A SINGLE CLASS 




