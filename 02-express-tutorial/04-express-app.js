const express = require("express");
const path = require("path");

const app = express();

// set up static and middleware.

// "app.use" is for setting up the middleware.
// express.static is a built-in middleware.
// A static asset(or resource) is a file that the server doesn't have to change anything in it.
// Examples of static assets includes: image files, styles file, and also Javascript files
// (Those JS files that doesn't change regardless of the visitor). 
// All static resources are dumped in a folder commonly called "public". 
// This is where all static resources should go.
// Using this method, express takes care of the status codes, content type, file path, etc automatically for us.
app.use(express.static("./public"));

// For the root
app.get("/", (req, res) => {
    // There is a res.sendFile method that comes with ExpressJS. This method requires an absolute path.
    // So we have to use the "path" module to get this path.
    // path.resolve or path.join can be used interchangeably in this case. 
    res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
    }
);
// All bad request, use this resource:
app.all("*", () => {
    res.status(404).send("resource not found");
    }
);

app.listen(5000, () => {
    console.log("server is listening on port 5000...");
    }
);