const Events = require('events') // this simply return a class , and class name should be in capital form

// const event = new Events(); // no need to create a new object bcz we all have access of Event object parameter and method
class BellEvent extends Events{

    // method 
    startBellEvent(){
        this.emit('bellRing');
    }
}


// if we want to access this function from another file need to export the module

module.exports = BellEvent;