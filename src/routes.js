const authControl = require('./controllers/AuthController')

const authControlPolicy = require('./policies/AuthControllerPolicy')

module.exports = (app) => {
    app.post('/register', authControlPolicy.register, authControl.register)
}
