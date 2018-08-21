// Use this server in production

const express = require('express')
const app = express()
const path = require('path')

const PORT = 80

app.use('/static', express.static('dist/static'))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

// fallback for any non-static page request is just sent the index page because this is a SPA
app.get(/\/.+/, function (req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

app.listen(PORT)
console.log(`Listening on port ${PORT}`)
