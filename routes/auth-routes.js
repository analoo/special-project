const router = require("express").Router();
const authenticateController = require("../controllers/authenticateController");

// file path /auth
router.route("/")
    .post(authenticateController.login)
    .delete(authenticateController.logout)

module.exports = router;