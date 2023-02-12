import db from '../config/db.js'
export const getPosts = (req, res) => {
  db.connect(function (err) {
    if (err) {
      console.error('error connecting: ' + err.stack)
      return
    }

    console.log('connected as id ' + db.threadId)
  })
  res.send('get Post')
}

export const getPost = (req, res) => {}

export const addPost = (req, res) => {}

export const deletePost = (req, res) => {}

export const updatePost = (req, res) => {}
