const db = require("../models")
var moment = require('moment');
const { Op } = require('sequelize')


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
                    attributes: ['startMonth', 'startYear'],
                    order: [['startDate', 'DESC']],
                }).then(dates => {
                    let months = []

                    if(dates.length === 0){
                        let beginning = moment().format("MM-YYYY")
                        months.push(beginning)
                    }

                    dates.map(date => {
                        let beginning = `${date.startMonth}-${date.startYear}`
                        if(months.indexOf(beginning) < 0){
                            months.push(beginning)
                        }
                    })

                    res.send(months)
                    console.log(months)

                }).catch(err => res.json(err))
        })
    },

    findByMonth: (req, res) => {
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
                        UserId: res1.UserId,
                        startMonth: req.body.month,
                        startYear: req.body.year
                    },
                    include: [db.Event],
                    order: [['startDate', 'DESC'],
                    ['startTime', 'DESC']
                    ],

                }).then(userEvent => {
                    console.log(userEvent)
                    res.send(userEvent)
                }).catch(err => res.send(err))
        })
    },

    findSingleEvent: (req, res) => {
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
                .findOne({
                    where: {
                        UserId: res1.UserId,
                        id: req.params.eventId
                    },
                    include: [db.Event],
                }).then(userEvent => {
                    console.log(userEvent)
                    res.send(userEvent)
                }).catch(err => res.json(err))
        }).catch(err => {
            res.json(err)
        })
    },


}