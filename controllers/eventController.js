const db = require("../models")

module.exports = {
    create: (req, res) => {
        db.Event
            .create(req.body, {})
            .then(event => {
                res.json(event)
            })
            .catch(err => res.json(err))
    },

    delete: (req,res) => {
        db.Event
            .destroy({
                where: {id: req.body.eventId}
            })
            .then(event => {
                res.json(event)
            })
            .catch( err => res.json(err))

    }

}