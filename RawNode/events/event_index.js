const Events = require('events') // this simply return a class , and class name should be in capital form

const event = new Events();

// need to declare emitter/listener  so that when event happened listener responses.
event.on('bellRing', ()=>{
    console.log('Event fired')
})

event.emit('bellRing');

