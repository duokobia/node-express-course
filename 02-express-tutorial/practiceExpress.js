const express = require("express");     // Import express module.
const path = require("path");           // Import path module.

const app = express();                  // Invoke Express method.

// This allows Express to take care of the status codes, content type, file path, etc automatically for me.
app.use(express.static("./new-public"));

// The code block below is unnecessary since the static directory has an index.html file.

// app.get("/", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "./new-public/index.html"));
// });

app.get("/sample", (req, res) => {
    res.send("This is working.");
});


app.listen("3000", () => {
    console.log("server is running on port: 3000...");
});