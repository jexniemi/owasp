const http = require('http')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

// Middleware
app.use(cors())
app.use(bodyParser.json())


// Routers
const router = require('./controllers/router')
app.use('/', router)


// Initialize server
const PORT = 4100
const server = http.createServer(app)
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

module.exports = {
  app, server
}
