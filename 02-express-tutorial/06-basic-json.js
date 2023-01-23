const express = require("express");
const { products } = require("./data")

const app = express();

// app.get("./", (req, res) => {
//     res.json([{ name: "john" }, { name: "susan" }]);
// });

// "products" is an array inside the "data.js" module and has been required for usage inside this module.
app.get("/", (req, res) => {
    res.json(products);
});

app.listen(5000, () => {
    console.log("server is listening on port: 5000...");
});