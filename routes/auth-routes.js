const router = require("express").Router();
const bcrypt = require("bcrypt")
const db = require("../models");

// file path /auth/

router.route("/")

// file path /auth/login

router
    .route("/login")
    .post((req, res) => {
        db.User.findOne({
            where: {
                email: req.body.email
            }
        })
            .then(async function (userData) {
                if (!userData) {
                    res.send({ user: false, message: "No user with that email" });
                    return
                }
            
                if (await bcrypt.compare( req.body.password, userData.uid)) {
                    res.cookie("userId", userData.id).send({ user: userData.id, message: "Welcome Back" });
                    console.log("Password found a match!")
                }
                else {
                    res.send({ user: false, message: "Password Incorrect" });
                    console.log("Incorrect Password")
                }
            })
            .catch(err => {
            res.send(err)
            console.log("We caught an error")
        });
    })

// file path /auth/logout

router.route("/logout", (req, res) => {
    res.send("You just signed out")
});

// file path /auth/logout
router
    .route("/register")
    // inside post, we need an async function to wait for the hashing of password
    .post(async (req, res) => {
        try {
            const hashedPassword = await bcrypt.hash(req.body.password, 10)
            db.User.create({
                name: req.body.name,
                email: req.body.email,
                uid: hashedPassword,
            }).then(userData => {
                res.send({ user: userData.id, message: "Welcome" });
                console.log("You signed up!")
            })
            
        } catch (err) {
            res.send(err)

        }
    });

// file path /auth/info




module.exports = router;