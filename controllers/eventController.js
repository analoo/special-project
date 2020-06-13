const db = require("../models")
const auth = require("./userSession")

module.exports = {
    create: (req, res) => {
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
            console.log(res1.UserId)
            db.Event
                .create(req.body, {})
                .then(event => {
                    console.log(res1.UserId)
                    console.log(event.id)
                    console.log("About to make the userEvent request")
                    db.UserEvent.create({
                        color: req.body.color,
                        startDate: req.body.startDate,
                        endDate: req.body.endDate,
                        startTime: req.body.startTime,
                        endTime: req.body.endTime,
                        contacts: req.body.contacts,
                        mask: req.body.mask,
                        sixFeet: req.body.sixFeet,
                        outside: req.body.outside,
                        notes: req.body.notes,
                        EventId: event.id,
                        UserId: res1.UserId
                    })
                        .then(userEvent => {
                            // res.json(userEvent)
                            console.log(userEvent)
                        })
                        .catch(err => console.log(err));
                })
                .catch(err => res.json(err))
        }).catch(err => {
            res.send(err)
        })
    },



    delete: (req, res) => {
        db.Event
            .destroy({
                where: { id: req.body.eventId }
            })
            .then(event => {
                res.json(event)
            })
            .catch(err => res.json(err))

    }

}