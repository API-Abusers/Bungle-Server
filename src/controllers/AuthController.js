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
                const newUser = new Users({
                    username: req.body.username,
                    email : req.body.email,
                    password : req.body.password
                })
                newUser.save().catch(err => console.log(err));
                res.send({
                    message: `Hello ${req.body.username}, you have been registered. Not that anything has really changed.`
                })
            }
            else
            {
                res.send({
                    message: `This username has already been taken. Try another one.`
                })
            }
        })
    }
}
