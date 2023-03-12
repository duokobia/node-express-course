const { Router } = require("express");
const jwt = require("jsonwebtoken");
const router = Router();
const authController = require("../controllers/authController");
const verifyToken = require("../middleware/authMiddleware");


router.get("/api/v1/hello", verifyToken, authController.homePage);
router.post("/api/v1/logon", authController.createUserDetaills);

module.exports = router;


// From home("/"), I make a post to "/api/v1/logon" when I submit the form.
// The access token is then generated and stored in the localstorage. The
// token then gives me access to make a call to fetch resources from the "/api/v1/hello" endpoint.