const router = require("express").Router();
const userRoutes = require("./user");
const userEventRoutes = require("./userEvent");


// /api/user
router.use("/user", userRoutes);

// /api/userEvent
router.use("/userEvent", userEventRoutes);


module.exports = router;
