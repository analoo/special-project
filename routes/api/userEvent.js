const router = require("express").Router();
const userEventController = require("../../controllers/userEventController");

//Matches with "/api/userEvent"
router
    .route("/")
    // .post(userEventController.create)
    // .get(userEventController.findByUser)
    .get(userEventController.findMonths)


// Matches with /api/userEvent/month
router
    .route("/month")
    .get(userEventController.findByMonth)

//     .put(userEventController.update)
//     .delete(userEventController.delete)


module.exports = router;
