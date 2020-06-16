const db = require("../models")

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
                    console.log(event)
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
                        startMonth: req.body.startMonth,
                        startDay: req.body.startDay,
                        startYear: req.body.startYear,
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

    edit: (req, res) => {
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
            db.UserEvent.update({
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
                startMonth: req.body.startMonth,
                startDay: req.body.startDay,
                startYear: req.body.startYear,
            }, {
                where: {
                    id: req.params.eventId,
                    UserId: res1.UserId
                }
            }).then(event => {
                db.Event
                .update(req.body, {
                    where: {
                        id: req.body.eventId,
                    }
                })
                .then(userEvent => {
                    console.log(userEvent)
                    res.sendStatus(200)
                })
                .catch(err => console.log(err));
            }).catch(err => console.log(err));

        }).catch(err => {
            res.send(err)
        })
    },



    delete: (req, res) => {
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
                .destroy({
                    where: {
                        id: req.params.eventId,
                        UserId: res1.UserId
                    }
                })
                .then(event => {
                    console.log(event)
                    res.json(event)
                })
                .catch(err => res.json(err))


        }).catch(err => {
            res.send(err)
        })
    },

}