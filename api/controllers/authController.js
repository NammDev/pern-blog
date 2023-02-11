import { createUser } from '../services/authService.js'

export const register = async (req, res) => {
  const { name, phone, password } = req.body
  try {
    if (!name || !phone || !password) {
      return res.status(400).json({
        err: 1,
        msg: `Missing inputs!`,
      })
    }
    const response = await createUser(req.body)
    return res.status(200).json(response)
  } catch (error) {
    log.error(error)
  }
}

export const login = (req, res) => {}

export const logout = (req, res) => {}
