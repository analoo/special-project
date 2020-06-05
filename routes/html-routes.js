var path = require("path")

module.exports = function (app) {

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "public/index.html"));
    })

    // sends user to indexhtml at /notes
    app.get("/search", function (req, res) {
        res.sendFile(path.join(__dirname, "public/html/search.html"));
    })

    // sends user to indexhtml at /notes
    app.get("/profile", function (req, res) {
        res.sendFile(path.join(__dirname, "public/html/profile.html"));
    })

}