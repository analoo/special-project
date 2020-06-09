
const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require("bcrypt")
const db = require("../models")

passport.use(new LocalStrategy({ usernameField: "email" },
  function (email, password, done) {
    db.User.findOne({ email: email })
      .then(async function(user){
        console.log(user)
        if (user === null) {
          return done(null, false, { message: "No user with that email" });
        }

        try {
          const hashPass = await bcrypt.hash(password,10)
          if (hashPass=== user.password) {
            return done(null, user, { message: "welcome back" });
          }
          else {
            return done(null, false, { message: "Password incorrect" });
          }
        }
        catch (err) {
          return done(err)
        }
      })
    }))


passport.serializeUser((user, done) => {
  done(null, user)
})
passport.deserializeUser((id, done) => {
  done(null, id)
})

module.exports = passport;

