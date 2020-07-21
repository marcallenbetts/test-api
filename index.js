const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(bodyParser.json())

const logger = (req, res, next) => {
  console.log(new Date() + ' ' + req.url)
  next()
}

app.use(logger)

require('./routes/orders')(app)
require('./routes/statuscodes')(app)
require('./routes/users')(app)
require('./routes/mirror')(app)

app.listen(4003)
