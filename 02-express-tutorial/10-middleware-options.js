const express = require("express");
const app = express();
const morgan = require("morgan");
const logger = require("./logger");
const authorize = require("./authorize");

// Middleware sits in-between the request from the client and the server's response:
// req  => Middleware => res

// Order matters here to the app.use(logger). The "app.use(logger)" will log to console only
// all the methods below it. Using a second argument in the function "app.use("/api", logger)"
// applies the middleware action to all routes starting with the passed in path "/api".
// Ex: api/products, api/items, etc This means "api/" is our base url.

// app.use(logger); // Single element
// app.use([logger, authorize]); // Multiple elements goes into []. In the console, they are logged in this order.

// Morgan is a 3rd party middleware that accepts certain properties in its options object. 
// One of such is  "tiny". https://www.npmjs.com/package/morgan
// The use of "morgan("tiny")" logs the minimal output:
// :method :url :status :res[content-length] - :response-time ms
app.use(morgan("tiny"));


app.get("/",  (req, res) => {
    res.send("Home");
});

app.get("/about", (req, res) => {
    res.send("About");
});

app.get("/api/products", (req, res) => {
    res.send("Our products");
});

app.get("/api/items",  (req, res) => {
    res.send("Our items");
});

app.listen(5000, () => {
    console.log("Server is listening at port: 5000...")
});