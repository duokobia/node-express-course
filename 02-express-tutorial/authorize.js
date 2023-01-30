const authorize = (req, res, next) => {
    const { user } = req.query;
    if(user === "john"){
        // http://localhost:5000/?user=john will give you access to communicate with the server. 
        req.user = { name: "john", id:3 }
        next()
    }
    else{
        res.status(401).send("Unauthorized");
        next()
    };
    console.log("authorize");
    next();
};
// You check for the JWT and if it exists, you can communicate with the user.
// 3 sources of middleware for your app: your own / express / 3rd party
// An example of 3rd party middleware is from morgan-npm.

module.exports = authorize;