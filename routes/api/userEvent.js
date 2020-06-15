const router = require("express").Router();
const userEventController = require("../../controllers/userEventController");

//Matches with "/api/userEvent"
router
    .route("/")
    .get(userEventController.findMonths)
    .put(userEventController.findByMonth)

module.exports = router;
