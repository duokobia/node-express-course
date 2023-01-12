// The event loop invokes the callback every 2 seconds.
// Since it is an async function, it is invoked after the last log is processed.
setInterval(() => {
    console.log("hello world");
}, 2000);
console.log("I will run first");
// Process stays alive unless someone
// Kills the process using CONTROL + C or an
// Unexpected error occurs.