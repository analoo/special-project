const router = require("express").Router();
const userController = require("../../controllers/userController");

// file path /api/user

router.route("/")
    .get(userController.findOne)
    .post(userController.register)
    .put(userController.update)


module.exports = router;