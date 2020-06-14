const db = require("../models")
const bcrypt = require("bcrypt")
const keys = require("../private/keys")



module.exports = {
    findOne: (req,res) => {
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
            db.User.findOne({
                where: {
                    id: res1.UserId
                }
            }).then(result => {
                res.send(result)
                })
            })
        .catch(err => {
            res.send(err)
        })

    },

    register:  async function (req,res) {
        console.log(req.body)
        try {
            // creates a hashed password
            const hashedPassWord = await bcrypt.hash(req.body.password,10)
            console.log(hashedPassWord)
            db.User.create({
                name: req.body.name,
                email: req.body.email,
                password: hashedPassWord
            }).then(async function(userData){
                let session = await bcrypt.hash(keys.cookie.keyWord,10)
                res.cookie("footsteps_userSession", session).send({message: "Welcome"})
                db.UserSession.create({
                    UserId: userData.id,
                    session:  session
                }).then(res => {
                    console.log("Get ready for the cookie")
                })
            })
            
        } catch(err){
            res.send(err)
        }
    } 

}