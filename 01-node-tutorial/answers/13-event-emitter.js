//Import the event module
const EventEmitter = require("events");

// Create an instance of the class(EventEmitter) that we get back from the event module.
const customEmitter = new EventEmitter();

// on - listens for specific event
// emit - emit an event
// The basic set up is to pass in the name of the event (a string). 
// When the method picks up some data, we want it to do something. 
// Hence, the callback function. 
customEmitter.on("response", (name, id) => {
    console.log(`data received user ${name} with id: ${id}`);
}); 

customEmitter.on("response", () => {
    console.log(`Some other logic goes here`);
}); 

// Once we subscribe to the specific event, we will want it emitted. 
// So just pass in the same string in the "on" method.
// What displays in console is the response from the callback function.
customEmitter.emit("response", "john", 34);

// 1. We can have as many functions needed in between to listen for events.
// 2. The above order maintained matters. We first listen for an event before emitting it.
// 3. We can pass the argument when we are emitting the event. customEmitter.emit("response", "john", 34);