var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bungleDB', {useNewUrlParser: true});

const Users = require('../models/users.js')

module.exports = {
    register (req, res) {
        Users.findOne({
            username: req.body.username
        }, (err, user) => {
            if(err) console.log(err)
            if(!user)
            {
                res.send({
                    message: `Hello ${req.body.username}, you have been registered. Not that anything has really changed.`
                })
                const newUser = new Users({
                    username: req.body.username,
                    email : req.body.email,
                    password : req.body.password
                })
                newUser.save().catch(err => console.log(err));
<<<<<<< HEAD
                console.log(`success ${req.body.username} ${req.body.email}`)
=======
>>>>>>> d2029e72427ac5523083634cb227c1d6c36419c5
            }
            else
            {
                res.send({
                    message: `This username ${req.body.username} has already been taken. Try another one.`
                })
                console.log(`failure`)
            }
        })
    }
}
