// We require(import) "http" access the "http" module that is built in nodeJS.
const http = require("http");

// The common convention to name this variable is "server".
const server = http.createServer((req, res) => {

// console.log(req.method)
const url = req.url;

// Using if-statement to check for the urls.
// home page
if (url === "/") {

// The correct standard status code(200 or whatever) must be sent back to the client in the response header. Look it up in MDN standard chart.
res.writeHead(200, { "content-type": "text/html" });
res.write("<h1>home page</h1>");

// With every response there should always be an end method(res.end())
// which signals that the communication is over. Else the browser loads indeifnitely. 
// In the res.end method, we can either pass text or setup html which displays on the 
// client side as a response to the request made.In this case, text("home page") is passed in.
res.end();
}
// about page
else if (url === "/about") {
res.writeHead(200, { "content-type": "text/html" });
res.write("<h1>about page</h1>");
res.end();
}
// error handling page (404)
else {
res.writeHead(404, { "content-type": "text/html" });
res.write("<h1>page not found</h1>");
res.end();
}
});

server.listen(5000);