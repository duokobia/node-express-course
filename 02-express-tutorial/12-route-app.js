// As we have more routes and more functionalities, our entry point(app.js) gets busy. 
// So we have to use ExpressJS router to group those routes and set them up as separate
// controllers in terms of functionalies.

const express = require("express");
const app = express();

const people = require("./routes/people");
const auth = require("./routes/auth");
// static assets
app.use(express.static("./methods-public"));
// parse form data
app.use(express.urlencoded({ extended: false }));
// parse.json
app.use(express.json());

// To use app.use() method to set up the base urls
// [("/api/people") & (/login)] for the people and auth file:
app.use("/api/people", people); // So you remove "/api/people" from the url in people.js
app.use("/login", auth);        // So you remove "login" from the url in auth.js
 
app.listen(5000, () => {
    console.log("Server is listening at port: 5000...")
});