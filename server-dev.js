// Use this server in development when not using hot-reload
const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')

const PORT = 8080

const stripe = require('stripe')()

app.use('/static', express.static('dist/static'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

app.post('/charge_token', function (req, res) {
  // console.log(req.body)
  const token = req.body.stripeToken
  res.send(token)
})

// fallback for any non-static page request is just sent the index page because this is a SPA
app.get(/\/.+/, function (req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

app.listen(PORT)
console.log(`Listening on port ${PORT}`)
