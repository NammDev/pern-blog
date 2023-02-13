import bcrypt from 'bcryptjs'
import { getUserByEmail, getUserByEmailName, createNewUser } from '../services/authService.js'
import { jwtGeneratorAccess, jwtGeneratorRefresh } from '../utils/jwtGenerator.js'

export const register = async (req, res) => {
  try {
    // 1. Destructure the req.body (name, email, password)
    const { username, email, password } = req.body

    // 2. Check if user exist (if false throw error)
    const user = await getUserByEmailName(email, username)
    if (user.length) return res.status(404).json('Email or Username is already exist!')

    // 3. Bcrypt the user password
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    // 4. Insert the new user in side our database
    await createNewUser(username, email, hash)

    // 5. Send respond
    return res.status(200).json('User has been created.')
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

export const login = async (req, res) => {
  try {
    // 1. Destructure the req.body (email, password)
    const { email, password } = req.body

    // 2. Check if user exist (if false throw error)
    const user = await getUserByEmail(email)
    if (user.length === 0) return res.status(404).json('Email is notfound!')

    // 3. Check if input password is same as database password
    const validPassword = await bcrypt.compare(password, user[0].password)
    if (!validPassword) return res.status(401).json('Password is incorrect')

    // 4. Give them jwt token
    const accessToken = jwtGeneratorAccess(user[0].id)
    const refreshToken = jwtGeneratorRefresh(user[0].id)

    // 5. Send respond
    res.json({ accessToken, refreshToken, ...user[0] })
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

export const logout = (req, res) => {}

export const refresh = (req, res) => {
  // if everything is ok, create new access token, refresh token and send to user
}
