const faker = require('faker')
const _ = require('lodash')

module.exports = (app) => {
  app.post('/orders/placeOrder', (req, res) => {
    typeof req.body.sku === 'string' && typeof req.body.quantity === 'number'
      ? res.send({
          orderId: faker.finance.account(),
          sku: req.body.sku,
          quantity: req.body.quantity
        })
      : res.sendStatus(400)
  })
}
