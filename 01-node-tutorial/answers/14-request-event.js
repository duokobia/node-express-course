const http = require("http");

// Initial setup: Method takes in the callback directly
// const server = hhtp.createServer((req, res) => {
//     res.end("Welcome")
// });

//Alternative setup: Using the Event Emitter API
const server = http.createServer();

// emits request event
// subscribe to it/ listen for it / respond to it
server.on("request", (req, res) => {
    res.end("Welcome")
});

server.listen(5000);