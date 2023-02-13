import db from '../config/db.js'

export const getUserByEmail = (email) =>
  new Promise((resolve, reject) => {
    const q = 'SELECT * FROM user WHERE email = ?'
    db.query(q, email, (err, rows) => {
      if (err) {
        reject(err)
      } else resolve(rows)
    })
  })

export const getUserByEmailName = (email, username) =>
  new Promise((resolve, reject) => {
    const q = 'SELECT * FROM user WHERE email = ? OR username = ?'
    db.query(q, [email, username], (err, rows) => {
      if (err) {
        reject(err)
      } else resolve(rows)
    })
  })

export const createNewUser = (username, email, hash) =>
  new Promise((resolve, reject) => {
    const q = `INSERT INTO user SET ?`
    const data = {
      username,
      email,
      password: hash,
    }
    db.query(q, data, (err, rows) => {
      if (err) {
        reject(err)
      } else resolve(rows)
    })
  })

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
