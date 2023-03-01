require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const authRoutes = require("./routes/authRoutes");
const app = express();

const port = process.env.PORT || 5000;

// middleware
app.use(express.static("./public"));
app.use(express.json());// Parse resources to Json 

// routes
app.use(authRoutes);


app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`)
});