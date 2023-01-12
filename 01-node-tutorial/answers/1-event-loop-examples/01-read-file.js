const { readFile } = require ('fs');

// In an async code implementation, the event loop just registers the callback(s)
// and moves on with processing the other lines of codes(serve the other users). 
// Only when it is done with the whole process will it execute the callback(s).

// CHECK THE FILE PATH!!!
console.log("started first task");

// Since "readFile" is asynchronous, the event loop offloads it to a file system. 
// And only when the response(error or result) is gotten will JS invoke the callback. 
// The callback log can only enter the stack when all the other processes are completed. 

// If there are other async modules in the code, they too will be offloaded to a 
// file system and handled in similar manner to the "readFile" module. 
readFile("./content/first.txt", "utf-8", (err, result) => { 
    if (err){
        console.log(err);
        return;
    }
    console.log(result);
    console.log("completed first task");
});

console.log("starting next task");