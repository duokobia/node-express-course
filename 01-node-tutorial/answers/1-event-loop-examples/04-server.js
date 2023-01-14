// Both "http.createServer" and "server.listen" are asynchronous processes.
// So once we set up the server process, the event loop keeps waiting for 
// requests to come in. And once they come in, we run our "http.createServer"
// callback process.
const http = require ("http");

const server = http.createServer((req, res) => {
    console.log("request event");
    res.end("hello world");
});

// The "server.listen" callback used to set up the server, could either be 
// successful or returns an error. In this case, it is successful. Server listens
// on port: 5000. Everytime the request comes in, the "http.createServer"
// callback function then logs to console "request event", and sends response to the client. 
// If no request, and no error in the "server.listen" process, the server keeps listening 
// indefinitely unless the process is stabbed.
server.listen(5000, () => {
    console.log("Server is listening on port: 5000 ...");
});



