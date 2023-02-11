import jwt from 'jsonwebtoken'
require('dotenv').config()

// This middleware will continue on if the token is inside the local storage
module.exports = async (req, res, next) => {
  // Get token from header
  const token = req.header('Authorization')

  // Check if not token
  if (!token) {
    return res.status(403).json({ msg: 'authorization denied' })
  }

  // Verify token
  try {
    //it is going to give use the user id (user:{id: user.id})
    const verify = jwt.verify(token, process.env.SECRET_KEY)
    req.user = verify.user
    next()
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' })
  }
}
