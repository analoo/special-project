const db = require("../models")

module.exports = {
    create: (req, res) => {
        db.UserEvent
            .create(req.body, {})
            .then(userEvent => { 
                res.json(userEvent)
            })
            .catch(err => res.status(422).json(err));
    },

    findByUser: (req,res) => {
        db.UserEvent
        .findAll({
            where: {
                UserId:req.body.userid
            },
            include: db.User
        }).then(userEvent => {
            res.json(userEvent)
        }).catch(err => res.json(err))
    },

    // 6/9, AMF - Should we confirm that the requester is the owner?

    update: (req,res) => {
        db.UserEvent
        .update(req.body,{
            where: {
                id:req.params.eventId
            }
        }).then(userEvent => {
            res.json(userEvent)
        }).catch(err => res.json(err))
    },

    delete: (req,res) => {
        db.UserEvent
        .destroy({
            where: {
                id:req.params.eventId
            }
        }).then(userEvent => {
            res.json(userEvent)
        }).catch(err => res.json(err))
    },


}