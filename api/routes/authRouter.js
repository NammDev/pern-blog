import express from 'express'
import { register, login, logout, refresh } from '../controllers/authController.js'
import authorize from '../middlewares/authorize.js'

const router = express.Router()

router.post('/register', register)
router.post('/login', login)
router.post('/logout', logout)
router.post('/refresh', authorize, refresh)
router.post('/logout')

export default router
