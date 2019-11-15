const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const config = require('./config/config')

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bungleDB', {useNewUrlParser: true});

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./routes.js')(app)

app.listen(config.port)

