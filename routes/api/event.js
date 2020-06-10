const router = require("express").Router();
const eventController = require("../../controllers/eventController");

//Matches with "/api/event"
router
    .route("/")
    .post(eventController.create)

//Matches with "/api/event/eventId"
router
    .route("/eventId")
    .delete(eventController.delete)




module.exports = router;
