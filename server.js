
// Dependencies
const express = require("express");
const routes = require("./routes");

// Set up the express app
const app = express();
var PORT = process.env.PORT || 4000;


// Static directory
// app.use(express.static("public"));

// Require models
const db = require("./models");

// Define middleware to parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }



// Routes
app.use(routes);

// Sync sequelize models
db.sequelize.sync().then(function () {
    // Starting express app
    app.listen(PORT, function () {
        console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
    })
})