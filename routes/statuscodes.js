module.exports = function (app) {
  app.get('/statuscodes/:statuscode', (req, res) => {
    res.status(req.params.statuscode)
    res.sendStatus(req.params.statuscode)
  })

  app.post('/statuscodes/:statuscode', (req, res) => {
    res.status(req.params.statuscode)
    res.sendStatus(req.params.statuscode)
  })

  app.put('/statuscodes/:statuscode', (req, res) => {
    res.status(req.params.statuscode)
    res.sendStatus(req.params.statuscode)
  })

  app.patch('/statuscodes/:statuscode', (req, res) => {
    res.status(req.params.statuscode)
    res.sendStatus(req.params.statuscode)
  })
}
