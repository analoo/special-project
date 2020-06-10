const router = require("express").Router();
const eventController = require("../../controllers/eventController");

//Matches with "/api/event"
router
    .route("/")
    .post(eventController.create)


module.exports = router;
