import { getAllPosts } from '../services/postService.js'

export const getPosts = async (req, res) => {
  try {
    const data = await getAllPosts()
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json(error)
  }
}

export const getPost = (req, res) => {}

export const addPost = (req, res) => {}

export const deletePost = (req, res) => {}

export const updatePost = (req, res) => {}
