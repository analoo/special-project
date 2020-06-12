const db = require("../models")
const bcrypt = require("bcrypt")
const keys = require("../private/keys")



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

    

}