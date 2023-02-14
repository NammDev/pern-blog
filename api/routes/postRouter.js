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

router.get('/', getPosts)
router.get('/:id', getPost)
router.post('/', authorize, addPost)
router.delete('/:id', authorize, deletePost)
router.put('/:id', authorize, updatePost)

export default router
