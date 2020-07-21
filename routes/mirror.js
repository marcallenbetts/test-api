const faker = require('faker')
const _ = require('lodash')

module.exports = (app) => {
  app.post('/mirror', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.send(JSON.stringify(req.body))
  })
}
