import { getAllPosts, getAllPostsByCat, getPostById } from '../services/postService.js'

export const getPosts = async (req, res) => {
  try {
    const data = req.query.cat ? await getAllPosts() : await getAllPostsByCat(req.query.cat)
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
    const data = await addPost(req.body)
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json(error)
  }
}

export const deletePost = async (req, res) => {
  try {
    const data = await deletePost(req.params.id, req.user.id)
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json(error)
  }
}

export const updatePost = async (req, res) => {
  try {
    const data = await updatePost(req.body, req.params.id, req.user.id)
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json(error)
  }
}
