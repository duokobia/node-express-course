require("dotenv").config();
const secret = process.env.JWT_SECRET;
const jwt = require("jsonwebtoken");


const verifyToken = (req, res, next) => {
    const bearerHeader = req.headers["authorization"];
    console.log("Bearer Header", bearerHeader);
    if (bearerHeader == null) return res.status(401).json({ "message": "unauthorized"});

    const token = bearerHeader && bearerHeader.split(" ")[1];
    console.log("Token", token);

    jwt.verify(token, secret, (err, user) => {
        console.log("error", err, "user", user);
        if(err) return res.status(403)
        req.user = user;
        next();
    });
};

module.exports = verifyToken;