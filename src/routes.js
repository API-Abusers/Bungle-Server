const authControl = require('./controllers/AuthController')

module.exports = (app) => {
    app.post('/register', authControl.register)
}
