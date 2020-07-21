const faker = require('faker')
const _ = require('lodash')

module.exports = (app) => {
  app.get('/users', (req, res) => {
    const maxNumberOfUsers = 10
    const count =
      req.query.num < maxNumberOfUsers ? req.query.num : maxNumberOfUsers

    let users = []
    _.times(count, () => {
      users.push(fakeUser())
    })
    res.send(users)
  })

  app.post('/users/createUser', (req, res) => {
    req.body.firstname && req.body.lastname
      ? res.send({
          id: faker.finance.account(),
          firstname: req.body.firstname,
          lastname: req.body.lastname
        })
      : res.sendStatus(400)
  })

  app.get('/users/:userid', (req, res) => {
    res.send(fakeUser(req.params.userid))
  })

  function fakeUser(userid) {
    return {
      userid: userid || faker.random.uuid(),
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName()
    }
  }
}
