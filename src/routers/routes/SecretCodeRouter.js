// all requires
const express = require("express");
const router = express.Router();
// the controller
const Controller = require("../../controllers/SecretCodeController");
const AuthMiddleware = require("../../middlewares/AuthMiddleware");

// ----------------
// start SecretCode section
// ----------------

router.get("/", AuthMiddleware, Controller.getById);
router.post("/", AuthMiddleware, Controller.create);
router.put("/:id", AuthMiddleware, Controller.update);
router.delete("/:id", AuthMiddleware, Controller.del);

// ----------------
// end SecretCode section
// ----------------

module.exports = router;
