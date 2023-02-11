import classNames from 'classnames/bind'
import styles from './Write.module.scss'
import { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useNavigate } from 'react-router-dom'

const cx = classNames.bind(styles)

function Write() {
  const [title, setTitle] = useState('')
  const [value, setValue] = useState('')
  const [file, setFile] = useState(null)
  const [cat, setCat] = useState('')

  const navigate = useNavigate()

  const handleClick = async (e) => {
    e.preventDefault()
    navigate('/')
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
          <div className={cx('cat')}>
            <input
              type='radio'
              checked={cat === 'art'}
              name='cat'
              value='art'
              id='art'
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor='art'>Art</label>
          </div>
          <div className={cx('cat')}>
            <input
              type='radio'
              checked={cat === 'science'}
              name='cat'
              value='science'
              id='science'
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor='science'>Science</label>
          </div>
          <div className={cx('cat')}>
            <input
              type='radio'
              checked={cat === 'technology'}
              name='cat'
              value='technology'
              id='technology'
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor='technology'>Technology</label>
          </div>
          <div className={cx('cat')}>
            <input
              type='radio'
              checked={cat === 'cinema'}
              name='cat'
              value='cinema'
              id='cinema'
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor='cinema'>Cinema</label>
          </div>
          <div className={cx('cat')}>
            <input
              type='radio'
              checked={cat === 'design'}
              name='cat'
              value='design'
              id='design'
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor='design'>Design</label>
          </div>
          <div className={cx('cat')}>
            <input
              type='radio'
              checked={cat === 'food'}
              name='cat'
              value='food'
              id='food'
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor='food'>Food</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Write
