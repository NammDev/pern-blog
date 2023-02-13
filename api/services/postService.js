import db from '../config/db.js'

export const getAllPosts = () =>
  new Promise((resolve, reject) => {
    const q = 'SELECT * FROM post'
    db.query(q, (err, rows) => {
      if (err) {
        reject(err)
      }
      resolve(rows)
    })
  })
