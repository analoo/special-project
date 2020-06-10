const db = require("../models")
const bcrypt = require("bcrypt")


module.exports = {

    login: (req, res) => {
        db.User.findOne({
            where: {
                email: req.body.email
            }
        })
            .then(async function (userData) {
                console.log(userData)
                if (!userData) {
                    res.send({ user: false, message: "No user with that email" });
                    return
                }

                if (await bcrypt.compare(req.body.password, userData.password)) {
                    console.log("password matched")
                    // let session = await bcrypt.hash(key, 10)
                    let session = `saferthan${userData.id}this`
                    res.cookie("userSession", session).send({ user: userData.id, message: "Welcome Back" })
                    console.log("Password found a match!")
                    db.UserSession.create({
                        UserId: userData.id,
                        session:  session
                    }).then(res => {
                        console.log("Get ready for the cookie")
                    }
                    )
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
    },

    logout: (req, res) => {
        const cookieValues = req.headers.cookie.split(";");
        res.clearCookie("userSession");
        res.send(200)
        let userSession = null;
        cookieValues.forEach(element => {
            if(element.split("=")[0].trim()=== "userSession"){
                userSession = element.split("=")[1].trim()
            }
        })
        db.UserSession.destroy({
            where: {
                session: userSession
            }
        }).then(result => {
            console.log("Cookie has been cleared")

        }).catch(err => {
            console.log(err)
        })
        
    }

}