import { getAllUsers } from '../services/authService.js'

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

export const login = (req, res) => {}

export const logout = (req, res) => {}

export const refresh = (req, res) => {
  // if everything is ok, create new access token, refresh token and send to user
}
