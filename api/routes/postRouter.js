import express from 'express'
import {
  addPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} from '../controllers/postController.js'
import authorize from '../middlewares/authorize.js'

const router = express.Router()

router.get('/', authorize, getPosts)
router.get('/:id', getPost)
router.post('/', addPost)
router.delete('/:id', deletePost)
router.put('/:id', updatePost)

export default router
