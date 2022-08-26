// all requires
const passport = require("passport");
const express = require("express");
const router = express.Router();

// the controller
const UserController = require("../../controllers/UserController");

// ----------------
// start test section
// ----------------

router.post("/register", UserController.Register);
router.post("/login", passport.authenticate("local"), UserController.Login);

// ----------------
// end test section
// ----------------

module.exports = router;
