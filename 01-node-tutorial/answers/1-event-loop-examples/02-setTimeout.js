// Started the operating system process
console.log("first");
// Since "setTimeout" is asynchronous, it will be offloaded in a file system
// despite the set time being zero seconds. It then have to wait for the whole 
// process to be completed and only when the process is done will the callback 
// response be invoked. 
setTimeout(() => {
    console.log("second");
}, 0);
console.log("third");
// Completed and exited the operating system process