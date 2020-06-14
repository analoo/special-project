const db = require("../models")
var moment = require('moment');

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
                        UserId: res1.UserId
                    },
                }).then(userEvent => {
                    res.send(userEvent)
                }).catch(err => res.json(err))
        }).catch(err => {
            res.json(err)
        })
    },

    findMonths: (req, res) => {
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
                        UserId: res1.UserId
                    },
                    attributes: ['startDate'],
                    order: [['startDate', 'ASC']],
                    limit: 1
                }).then(dates => {
                    let months = []

                    if (moment().startOf("month").format("YYYY-MM-DD") === moment(dates[0].startDate).startOf("month").format("YYYY-MM-DD")) {
                        // if (userEvent.length === 0) {
                        console.log("User has no events or is new")
                        res.send([{
                            month: moment().format("MMMM YYYY"),
                            start: moment().startOf("month").format("YYYY-MM-DD"),
                            end: moment().endOf("month").format("YYYY-MM-DD")
                        }])
                        return
                    }

                    if (moment().startOf("month") > moment(dates[0].startDate).startOf("month")) {
                        console.log("User started before this month")
                        let userStart = moment(dates[0].startDate).startOf("month")
                        let thisMonth = moment().startOf("month")
                        let diff = thisMonth.diff(userStart, "months")
                        console.log(diff)
                        for (let i = 0; i <= diff; i++) {
                            months.push({
                                month: moment().subtract(i, "months").format("MMMM YYYY"),
                                start: moment().subtract(i, "months").startOf("month").format("YYYY-MM-DD"),
                                end: moment().subtract(i, "months").format("YYYY-MM-DD")
                            })
                        }
                        res.send(months)
                        return
                    }

                }).catch(err => res.json(err))
    })
},

    findByMonth: (req, res) => {
        db.UserEvent
            .findAll({
                where: {
                    UserId: req.body.UserId
                },
                from: {
                    $between: [req.body.start, req.body.end]
                },
            }).then(userEvent => {
                console.log(userEvent)
                res.send(userEvent)
            })
    }



}