import {
  getAllPosts,
  getAllPostsByCat,
  getPostById,
  deletePostById,
  addPostService,
  updatePostService,
} from '../services/postService.js'

export const getPosts = async (req, res) => {
  try {
    const data = req.query.cat ? await getAllPostsByCat(req.query.cat) : await getAllPosts()
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json(error)
  }
}

export const getPost = async (req, res) => {
  try {
    const data = await getPostById(req.params.id)
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json(error)
  }
}

export const addPost = async (req, res) => {
  try {
    const data = await addPostService(req.body, req.user.id)
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json(error)
  }
}

export const deletePost = async (req, res) => {
  try {
    const data = await deletePostById(req.params.id, req.user.id)
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json(error)
  }
}

export const updatePost = async (req, res) => {
  try {
    const data = await updatePostService(req.body, req.params.id, req.user.id)
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json(error)
  }
}
