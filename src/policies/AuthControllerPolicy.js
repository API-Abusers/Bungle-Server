const Joi = require('joi')

module.exports = {
    register (req, res, next)
    {
        const Schema = {
            email: Joi.string().email(),
            username: Joi.string(),
            password: Joi.string().alphanum().min(6).max(30)
        }

        const{error} = Joi.validate(req.body, Schema)

        if(error)
        {
            switch(error.details[0].context.key)
            {
                case 'email': res.status(400).send({ error: 'Invalid email address.'})
                break;
                case 'password': res.status(400).send({ error: 'Password must be 6-30 characters.'})
                break;
                case 'username': res.status(400).send({ error: 'Invalid username.'})
                break;
                default: res.status(400).send({ error: 'Invalid registration.'})
            }
        }
        else
        {
            next()
        }
    }
}
