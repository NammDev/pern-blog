import classNames from 'classnames/bind'
import styles from './Write.module.scss'
import { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useLocation, useNavigate } from 'react-router-dom'
import moment from 'moment'
import RadioCategory from './RadioCategory'

const cx = classNames.bind(styles)

function Write() {
  const state = useLocation().state
  const [value, setValue] = useState(state?.title || '')
  const [title, setTitle] = useState(state?.desc || '')
  const [file, setFile] = useState(null)
  const [cat, setCat] = useState(state?.cat || '')

  const navigate = useNavigate()

  const upload = async () => {
    try {
      const formData = new FormData()
      formData.append('file', file)
      // const res = await axios.post('/upload', formData)
      // return res.data
    } catch (err) {
      console.log(err)
    }
  }

  const handleClick = async (e) => {
    e.preventDefault()
    // const imgUrl = await upload()

    try {
      // state
      //   ? await axios.put(`/posts/${state.id}`, {
      //       title,
      //       desc: value,
      //       cat,
      //       img: file ? imgUrl : '',
      //     })
      //   : await axios.post(`/posts/`, {
      //       title,
      //       desc: value,
      //       cat,
      //       img: file ? imgUrl : '',
      //       date: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'),
      //     })
      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className={cx('add')}>
      <div className={cx('content')}>
        <input
          type='text'
          placeholder='Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className={cx('editorContainer')}>
          <ReactQuill className={cx('editor')} theme='snow' value={value} onChange={setValue} />
        </div>
      </div>
      <div className={cx('menu')}>
        <div className={cx('item')}>
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input
            style={{ display: 'none' }}
            type='file'
            id='file'
            name=''
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label className={cx('file')} htmlFor='file'>
            Upload Image
          </label>
          <div className={cx('buttons')}>
            <button>Save as a draft</button>
            <button onClick={handleClick}>Publish</button>
          </div>
        </div>
        <div className={cx('item')}>
          <h1>Category</h1>
          <RadioCategory cat={cat} setCat={setCat} value='art' />
          <RadioCategory cat={cat} setCat={setCat} value='science' />
          <RadioCategory cat={cat} setCat={setCat} value='technology' />
          <RadioCategory cat={cat} setCat={setCat} value='cinema' />
          <RadioCategory cat={cat} setCat={setCat} value='design' />
          <RadioCategory cat={cat} setCat={setCat} value='food' />
        </div>
      </div>
    </div>
  )
}

export default Write
