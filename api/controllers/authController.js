import bcrypt from 'bcryptjs'
import { getAllUsers, getUserByEmail } from '../services/authService.js'
import { jwtGeneratorAccess, jwtGeneratorRefresh } from '../utils/jwtGenerator.js'

export const register = async (req, res) => {
  try {
    const rows = await getAllUsers()
    res.json(rows)
    // // 1. Destructure the req.body (name, email, password)
    // const { name, email, password } = req.body
    // // 2. Check if user exist (if true throw error)
    // const user = await pool.query('SELECT * FROM users WHERE user_email = $1', [email])
    // if (user.rows.length !== 0) {
    //   return res.status(401).json('User already exist')
    // }
    // // 3. Bcrypt the user password
    // const salt = await bcrypt.genSalt(10)
    // const hash = await bcrypt.hash(password, salt)
    // // 4. Insert the new user in side our database
    // const newUser = await pool.query(
    //   'INSERT INTO users (user_name, user_email, user_password) VALUES ($1, $2, $3) RETURNING *',
    //   [name, email, hash]
    // )
    // // 5. Generating the jwt token
    // const token = jwtGenerator(newUser.rows[0].user_id)
    // // 6. Send respond
    // res.json({ accessToken: token })
  } catch (error) {
    console.log(error)
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

    // // 4. Give them jwt token
    const accessToken = jwtGeneratorAccess(user[0].id)
    const refreshToken = jwtGeneratorRefresh(user[0].id)

    // // 5. Send respond
    res.json({ accessToken, refreshToken, ...user[0] })
  } catch (error) {
    console.log(error)
    res.status(500).send(error)
  }
}

export const logout = (req, res) => {}

export const refresh = (req, res) => {
  // if everything is ok, create new access token, refresh token and send to user
}
