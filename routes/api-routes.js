const router = require("express").Router();
const db = require("../models");



// file path /api/

router.route("/")

router.route("/profile")
    .get((req, res) => {
        // console.log(req.cookie)
        const cookieValues = req.headers.cookie.split(";");
        let userId = null;
        cookieValues.forEach(element => {
            if(element.split("=")[0].trim()=== "userId"){
                userId = element.split("=")[1].trim()
            }
        })

        db.User.findOne({
            where: {
                id: userId
            }
        }).then(userData => {
            console.log(userData)
            res.send({id: userData.id, username: userData.email});
        })
        
       
    });

module.exports = router;