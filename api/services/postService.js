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

export const getAllPostsByCat = (cat) =>
  new Promise((resolve, reject) => {
    const q = 'SELECT * FROM post WHERE cat=?'
    db.query(q, cat, (err, rows) => {
      if (err) {
        reject(err)
      }
      resolve(rows)
    })
  })

export const getPostById = (id) =>
  new Promise((resolve, reject) => {
    const q =
      'SELECT p.id, `username`, `title`, `desc`, p.img, u.img AS userImg, `cat`,`date` FROM user u JOIN post p ON u.id = p.uid WHERE p.id = ? '

    db.query(q, [id], (err, rows) => {
      if (err) {
        reject(err)
      }
      resolve(rows[0])
    })
  })

export const addPostService = ({ title, desc, img, cat, date }, uid) =>
  new Promise((resolve, reject) => {
    const q = 'INSERT INTO post(`title`, `desc`, `img`, `cat`, `date`,`uid`) VALUES (?)'
    const values = [title, desc, img, cat, date, uid]
    db.query(q, [values], (err, data) => {
      if (err) {
        reject(err)
      }
      resolve('Post has been created.')
    })
  })

export const deletePostById = (pid, uid) =>
  new Promise((resolve, reject) => {
    const q = 'DELETE FROM post WHERE `id` = ? AND `uid` = ?'
    db.query(q, [pid, uid], (err, data) => {
      if (err) {
        reject(err)
      }
      resolve('Post has been deleted!')
    })
  })

export const updatePostService = ({ title, desc, img, cat }, pid, uid) =>
  new Promise((resolve, reject) => {
    const q = 'UPDATE post SET `title`=?,`desc`=?,`img`=?,`cat`=? WHERE `id` = ? AND `uid` = ?'
    const values = [title, desc, img, cat, pid, uid]
    db.query(q, values, (err, data) => {
      if (err) {
        reject(err)
      }
      resolve('Post has been updated.')
    })
  })
