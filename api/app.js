// Install npm
import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import configFile from './config/index.js'
import initRoutes from './routes/index.js'
dotenv.config()

// Setup
const config = configFile[process.env.ENVIRONMENT || development]
const app = express()
const log = config.log()

// Middleware
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Routes
initRoutes(app)

// Listen
const port = process.env.PORT || 8800
app.listen(port, () => {
  log.info(`Api app listening on port ${port}`)
})
