import db from '../config/db.js'

export const getAllUsers = () =>
  new Promise((resolve, reject) => {
    const q = 'SELECT * FROM user'
    db.query(q, (err, rows) => {
      if (err) {
        return reject(err)
      }
      resolve(rows)
    })
  })
