const router = require("express").Router();
const authenticateController = require("../controllers/authenticateController");

// file path /auth
router.route("/")
    .post(authenticateController.signin)
    .delete(authenticateController.signout)

module.exports = router;