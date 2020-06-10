const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const authRoutes = require("./auth-routes");


// API Routes
router.use("/api", apiRoutes);

router.use("/auth", authRoutes);

router.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"))
})

module.exports = router;
