const db = require("../models")
const bcrypt = require("bcrypt")
const keys = require("../private/keys")


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
                    res.send({ user: false, message: "No Account Associated with that email", color: "red"});
                    return
                }

                if (await bcrypt.compare(req.body.password, userData.password)) {
                    console.log("password matched")
                    let session = await bcrypt.hash(keys.cookie.keyWord, 10)
                    res.cookie("footsteps_userSession", session).send({user: userData.id, message: "Welcome Back", color: "green"})
                    console.log("Password found a match!")
                    db.UserSession.create({
                        UserId: userData.id,
                        session:  session
                    }).then(res => {
                        console.log("Get ready for the cookie")
                    })
                }
                else {
                    res.send({ user: false, message: "Password Incorrect", color: "red"});
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
        res.clearCookie("footsteps_userSession");
        res.send(200)
        let userSession = null;
        cookieValues.forEach(element => {
            if(element.split("=")[0].trim()=== "userSession"){
                userSession = element.split("=")[1].trim()
            }
        })

        console.log(userSession);
        console.log(decodeURIComponent(userSession))

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