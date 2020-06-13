const db = require("../models")

module.exports = {

    findByUser: (req, res) => {
        const cookieValues = req.headers.cookie.split(";");
        let userSession = null;
        cookieValues.forEach(element => {
            if (element.split("=")[0].trim() === "footsteps_userSession") {
                userSession = decodeURIComponent(element.split("=")[1].trim())
            }
        })
        db.UserSession.findOne({
            where: {
                session: userSession
            }
        }).then(res1 => {
            db.UserEvent
                .findAll({
                    where: {
                        UserId: res1.userID
                    },
                }).then(userEvent => {
                    res.send(userEvent)
                }).catch(err => res.json(err))
        }).catch(err => {
            res.json(err)
        })
    }


}