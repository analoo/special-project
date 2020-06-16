const router = require("express").Router();
const eventController = require("../../controllers/eventController");
const externalAPIs = require("../../controllers/externalAPIs");


//Matches with "/api/event"
router
    .route("/")
    .post(eventController.create)
    .get(externalAPIs.find)


//Matches with "/api/event/:eventid"

router.route("/:eventId")
    .put(eventController.edit)
    .delete(eventController.delete)

module.exports = router;
