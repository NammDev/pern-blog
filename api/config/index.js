// Load package.json
const pjs = require('../package.json')
const bunyan = require('bunyan')

// Get some meta info from the package.json
const { name, version } = pjs

const getLogger = (serviceName) => bunyan.createLogger({ name: `${serviceName}` })

module.exports = {
  development: {
    name,
    version,
    serviceTimeout: 30,
    sql: {
      options: {
        host: 'localhost',
        port: 5432,
        database: 'sequelize_course',
        dialect: 'postgres',
        username: 'postgres',
        password: 'namkhanh',
      },
    },
    log: () => getLogger(name),
  },
  production: {
    name,
    version,
    serviceTimeout: 30,
    log: () => getLogger(name),
  },
  test: {
    name,
    version,
    serviceTimeout: 30,
    log: () => getLogger(name),
  },
}
