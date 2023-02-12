import mysql from 'mysql'
import configFile from './index.js'

const config = configFile[process.env.ENVIRONMENT || 'development']

const db = mysql.createConnection(config.sql)

export default db
