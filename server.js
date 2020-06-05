// Dependencies
const path = require("path")
const express = require("express");
// const routes = require("./routes");

// Set up the express app
const app = express();
var PORT = process.env.PORT || 3001;


// Static directory
app.use(express.static("public"));

// Define middleware to parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Require models
const db = require("./models");

// Routes
// app.use(routes);
require("./routes/html-routes")(app)


// Sync sequelize models
// db.sequelize.sync().then(function () {
    // Starting express app
    app.listen(PORT, function () {
        console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
    })
// })