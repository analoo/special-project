const db = require("../models")
const keys = require("../private/keys")

module.exports = {
    create: async function(req,res){
        let session = await bcrypt.hash(keys.cookie.keyWord,10)
        res.cookie("footsteps_userSession", session).send({code: 200})
        db.UserSession.create({
            UserId: req.body.id,
            session:  session
        }).then(result => {
            res.send(result)
        }).catch(err => {
            res.send(err)
        })
    },

    findOne: (req, res) => {
        const cookieValues = req.headers.cookie.split(";");
        console.log(req)
        // let userSession = null;
        // cookieValues.forEach(element => {
        //     if (element.split("=")[0].trim() === "footsteps_userSession") {
        //         userSession = decodeURIComponent(element.split("=")[1].trim())
        //     }
        // })
        // db.UserSession.findOne({
        //     where: {
        //         session: userSession
        //     }
        // }).then(res1 => {
        //     console.log(res1)
        // })
    },

    delete: (req, res) => {
        const cookieValues = req.headers.cookie.split(";");
        res.clearCookie("footsteps_userSession");
        res.send(200)
        let userSession = null;
        cookieValues.forEach(element => {
            if(element.split("=")[0].trim()=== "footsteps_userSession"){
                userSession = element.split("=")[1].trim()
            }
        })

        db.UserSession.destroy({
            where: {
                session: userSession
            }
        }).then(result => {
            res.send(result)

        }).catch(err => {
            res.send(err)
        })
        
    }


}