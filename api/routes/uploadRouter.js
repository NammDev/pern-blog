import express from 'express'
import { uploadFile } from '../controllers/uploadController.js'
import multer from 'multer'

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './../client/public/upload')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname)
  },
})

const upload = multer({ storage })

const router = express.Router()

router.post('', upload.single('file'), uploadFile)

export default router
