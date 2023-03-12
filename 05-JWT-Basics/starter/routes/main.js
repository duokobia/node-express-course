const express = require("express");
const router = express.Router();

const{ login, dashboard } = require("../controllers/main");

const authMiddleware = require("../middleware/auth");

router.route("/dashboard").get( authMiddleware, dashboard);// Everytime a client hits this route, he must go through this middleware(authMiddleware)
router.route("/login").post(login);

module.exports = router;
