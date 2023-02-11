import jwt from 'jsonwebtoken'
require('dotenv').config()

function jwtGenerator(id, phone) {
  const payload = {
    user: {
      id,
      phone,
    },
  }
  return jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '1d' })
}

module.exports = jwtGenerator
