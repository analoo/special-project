
// Dependencies
const path = require("path")
const express = require("express");
const cookieParser = require("cookie-parser")
const routes = require("./routes");

// Initializing Passport
const passport = require("passport");
const flash = require("express-flash");
const session = require("express-session")
// const initializePassport = require("../client/src/Utils/passportConfig")
// initializePassport(passport)

// Set up the express app
const app = express();
var PORT = process.env.PORT || 3001;


// Static directory
app.use(express.static("public"));

// Define middleware to parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser())
app.use(flash())
app.use(session({
    // to update with real key in the future and add to the .env file
    secret: "placeholder",
    resave: false,
    saveUninitialized: false

}))

app.use(passport.initialize());
app.use(passport.session());

// Require models
const db = require("./models");

// Routes
app.use(routes);

// Sync sequelize models
db.sequelize.sync().then(function () {
    // Starting express app
    app.listen(PORT, function () {
        console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
    })
})