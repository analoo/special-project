const db = require("../models")
const bcrypt = require("bcrypt")


module.exports = {
    findOne: (req, res) => {
        const cookieValues = req.headers.cookie.split(";");
        let userSession = null;
        cookieValues.forEach(element => {
            if (element.split("=")[0].trim() === "userSession") {
                userSession = element.split("=")[1].trim()
            }
        })

        db.UserSession.findOne({
            where: {
                session: userSession
            },
            include: db.User
        }).then(userData => {
            console.log(userData)
            res.send({ id: userData.UserId, username: userData.User.email });
        })
    },

    register: async function (req, res){
        try {
            const hashedPassword = await bcrypt.hash(req.body.password, 10)
            console.log(`created hashed password: ${hashedPassword}`)
            db.User.create({
                name: req.body.name,
                email: req.body.email,
                password: hashedPassword,
            }).then((userData) => {
                let sessionID = `saferthan${userData.id}this`
                res.cookie("userSession", sessionID).send({ user: userData.id, message: "Welcome!" })
                db.UserSession.create({
                    UserId: userData.id,
                    session: sessionID
                }).then(res => {
                    console.log(res)
                }
                )
            })

        } catch (err) {
            res.send(err)

        }
    }

}