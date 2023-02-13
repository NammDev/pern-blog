import express from 'express'
import { register, login, logout, refresh } from '../controllers/authController.js'
import authorize from '../middlewares/authorize.js'

const router = express.Router()

router.post('/register', register)
router.post('/login', login)
router.post('/logout', authorize, logout)
router.post('/refresh', refresh)

export default router
