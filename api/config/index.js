// Load package.json
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const pjs = require('../package.json')
import bunyan from 'bunyan'

// Get some meta info from the package.json
const { name, version } = pjs

const getLogger = (serviceName) => bunyan.createLogger({ name: `${serviceName}` })

const config = {
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

export default config
