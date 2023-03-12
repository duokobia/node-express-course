require("dotenv").config();
const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;

const homePage = (req, res) => {
    console.log("user", req.user);
    res.json(req.user);
};

const createUserDetaills = (req, res) => {

    const username = req.body.name;
    const password = req.body.password;
    const user = { name: username, password: password }; 

//  In order to serialize the user, we need a secret key(secret)
    const accessToken = jwt.sign( user, secret, { expiresIn: "24h" } );
    console.log( username, password);
    res.status(200).json({ accessToken: accessToken })
};

// Use the "crypt" library inside of node.js to create a secret value.
// require("crypto").randomBytes(64).toString("hex")

module.exports = {
    homePage,
    createUserDetaills
};