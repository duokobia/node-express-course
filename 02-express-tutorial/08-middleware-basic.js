const express = require("express");
const app = express();

// Middleware sits in-between the request from the client and the server's response:
// req  => Middleware => res

const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);
    next();
};

app.get("/",  (req, res) => {
    res.send("Home");
});

app.get("/about", (req, res) => {
    res.send("About");
});


app.listen(5000, () => {
    console.log("Server is listening at port: 5000...")
});