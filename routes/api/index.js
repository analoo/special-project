const router = require("express").Router();
const userRoutes = require("./user");
const userEventRoutes = require("./userEvent");
const eventRoutes = require("./event");



// /api/user
router.use("/user", userRoutes);

// /api/userEvent
router.use("/userEvent", userEventRoutes);

// /api/event
router.use("/event",eventRoutes);



module.exports = router;
