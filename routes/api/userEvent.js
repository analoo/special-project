const router = require("express").Router();
const userEventController = require("../../controllers/userEventController");

//Matches with "/api/userEvent"
router
    .route("/")
    .post(userEventController.create)
    .get(userEventController.findByUser)


//Matches with /api/userEvent/:eventId
router
    .route("/:eventId")
    .put(userEventController.update)
    .delete(userEventController.delete)


module.exports = router;
