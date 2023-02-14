import express from 'express'
import uploadMiddleware from '../middlewares/upload.js'
import { uploadFile } from '../controllers/uploadController.js'

const router = express.Router()

router.post('', uploadMiddleware, uploadFile)

export default router
