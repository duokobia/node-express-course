const express = require("express");
const app = express();
const logger = require("./logger");
const authorize = require("./authorize");

// Middleware sits in-between the request from the client and the server's response:
// req  => Middleware => res

// Order matters here to app.use(logger). The "app.use(logger)" will log to console 
// all the methods below it. Using a second argument in the function "app.use("/api", logger)"
// applies the middleware action to all routes starting with the passed in path "/api".
// Ex: api/products, api/items, etc This means "api/" is our base url.

// app.use(logger); // Single element
app.use([logger, authorize]); // Multiple elements goes into []. In the console, they are logged in this order.

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