const db = require("../models")

module.exports = {
    create: (req, res) => {
        db.Event
            .create(req.body, {})
            .then(event => 
                res.send(event.id))
            .catch(err => res.json(err))
    }

}