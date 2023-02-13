import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

export const jwtGeneratorAccess = (id) => {
  const payload = {
    id,
  }
  return jwt.sign(payload, process.env.SECRET_KEY_ACCESS, { expiresIn: '15m' })
}

export const jwtGeneratorRefresh = (id) => {
  const payload = {
    id,
  }
  return jwt.sign(payload, process.env.SECRET_KEY_REFRESH, { expiresIn: '2d' })
}
