// Use this server in production
const fs = require('fs')
const http = require('http')
const https = require('https')
const express = require('express')
const app = express()
const path = require('path')

const HTTP_PORT = 80
const HTTPS_PORT = 443

// Certificate
const privateKey = fs.readFileSync('/etc/letsencrypt/live/cosmocal.com/privkey.pem', 'utf8')
const certificate = fs.readFileSync('/etc/letsencrypt/live/cosmocal.com/cert.pem', 'utf8')
const ca = fs.readFileSync('/etc/letsencrypt/live/cosmocal.com/chain.pem', 'utf8')

const credentials = {
  key: privateKey,
  cert: certificate,
  ca: ca
}

app.use('/static', express.static('dist/static'))

// Should force https
app.use(function (req, res, next) {
  if (!req.secure) {
    return res.redirect('https://' + req.headers.host + req.url)
  }
  next()
})

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

// fallback for any non-static page request is just sent the index page because this is a SPA
app.get(/\/.+/, function (req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

// old deprecated code
// app.listen(PORT)
// console.log(`Listening on port ${PORT}`)

const httpServer = http.createServer(app)
const httpsServer = https.createServer(credentials, app)

httpServer.listen(HTTP_PORT, () => {
  console.log(`Http server running on port ${HTTP_PORT}`)
})
httpsServer.listen(HTTPS_PORT, () => {
  console.log(`Https server running on port ${HTTPS_PORT}`)
})