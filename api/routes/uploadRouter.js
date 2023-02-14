import express from 'express'
import { uploadFile } from '../controllers/uploadController.js'
import multer from 'multer'

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../upload/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname)
  },
})

const upload = multer({ dest: './hehe/' })

const router = express.Router()

router.post('', upload.single('file'), uploadFile)

export default router
