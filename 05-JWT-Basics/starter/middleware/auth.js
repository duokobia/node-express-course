const jwt = require("jsonwebtoken");
const { UnauthenticatedError } = require("../errors");


const authenticationMiddleware = async (req, res, next) => {

    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer ') ){
        throw new UnauthenticatedError("No token provided")
    };

    const token = authHeader.split(' ')[1];

    try {
        console.log(" verify token", token, "Secret", process.env.JWT_SECRET);
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // The token is verified here using the key in the .env
        const { id, username } = decoded;
        req.user = {id, username}; // From the decoded, the user id and username is extracted
        next();
    } catch (error) {
        throw new UnauthenticatedError("Not authorized to access this route");
    }
};

module.exports = authenticationMiddleware;