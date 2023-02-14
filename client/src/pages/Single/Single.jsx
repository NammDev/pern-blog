import { useState, useEffect, useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import DOMPurify from 'dompurify'
import classNames from 'classnames/bind'
import styles from './Single.module.scss'
import Menu from './Menu'
import { deletePost, getPost } from '~/services/post'
import { AuthContext } from '~/context/authContext'
import moment from 'moment'
import Edit from '~/assets/img/edit.png'
import Delete from '~/assets/img/delete.png'
const cx = classNames.bind(styles)

function Single() {
  const [post, setPost] = useState({})
  const location = useLocation()
  const navigate = useNavigate()

  const postId = location.pathname.split('/')[2]

  const { currentUser } = useContext(AuthContext)

  const handleDelete = async () => {
    try {
      await deletePost(postId)
      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }

  const fetchData = async () => {
    try {
      const data = await getPost(postId)
      setPost(data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchData()
  }, [postId])

  return (
    <div className={cx('single')}>
      <div className={cx('content')}>
        <img src={`./../upload/${post.img}`} alt='' />
        <div className={cx('user')}>
          {post.userImg && <img src={post.userImg} alt='' />}
          <div className='info'>
            <span>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser.username === post.username && (
            <div className={cx('edit')}>
              <Link to={`/write?edit=2`} state={post}>
                <img src={Edit} alt='' />
              </Link>
              <img onClick={handleDelete} src={Delete} alt='' />
            </div>
          )}
        </div>
        <h1>{post.title}</h1>
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(post.desc),
          }}
        ></p>
      </div>
      <Menu cat={post.cat} />
    </div>
  )
}

export default Single
