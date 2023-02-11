// Setup
const express = require('express')
const app = express()
const config = require('./config')[process.env.NODE_ENV || 'development']
const log = config.log()

// Connect DB

// Middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Listen
port = process.env.PORT || 8800
app.listen(port, () => {
  log.info(`Api app listening on port ${port}`)
})
