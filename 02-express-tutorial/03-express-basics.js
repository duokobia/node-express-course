//We first import the module
const express = require("express");

// We then invoke it
const app = express();

app.get("/", (req, res) => {
    console.log("user hit the resource");

    // Before we invoke the send method, we can also add the status method here by chaining them.
    res.status(200).send("Home page");
    }
);
app.get("/about", (req, res) => {
    res.status(200).send("About page");
    }
);
// This method handles all http verbs(methods): 
// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen

// The app.all is used to handle error page. That is, undefined routes.
// It takes in two arguments: The path, and a callback function. The "*" use here means all paths.
app.all("*", (req, res) => {
    // Before we invoke the send method, we can also add the status method here by chaining them.
    res.status(404).send("<h1>resource not found</h1>");
    }
);
app.listen(5000, () => {
    console.log("server is listening on port 5000...");
    }
);