import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

const { TokenExpiredError } = jwt

export const catchError = (err, res) => {
  if (err instanceof TokenExpiredError) {
    return res.status(401).send({ message: 'Unauthorized! Access Token was expired!' })
  }
  return res.status(401).json('Unauthorization!!!')
}

// This middleware will continue on if the token is inside the local storage
const authorize = async (req, res, next) => {
  // Get token from header
  const authHeader = req.header('Authorization')

  // Check if not token
  if (!authHeader) {
    return res.status(403).json({ msg: 'No token provided' })
  }

  // Verify token
  try {
    //it is going to give use the user id (user:{id: user.id})
    const token = authHeader.split(' ')[1]
    const verify = jwt.verify(token, process.env.SECRET_KEY_ACCESS)
    req.user = verify
    next()
  } catch (err) {
    catchError(err, res)
  }
}

export default authorize
