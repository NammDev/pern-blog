import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './Home.module.scss'
import Button from '~/components/Button/Button'
import { getPosts } from '~/services/post'

const cx = classNames.bind(styles)

function Home() {
  const [posts, setPosts] = useState([])

  const location = useLocation()
  const category = location.search

  const fetchData = async () => {
    try {
      const data = await getPosts(category)
      setPosts(data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchData()
  }, [category])

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html')
    return doc.body.textContent
  }

  return (
    <div className={cx('home')}>
      <div className={cx('posts')}>
        {posts.map((post) => (
          <div className={cx('post')} key={post.id}>
            <div className={cx('img')}>
              <img src={post.img} alt='' />
            </div>
            <div className={cx('content')}>
              <Link to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{getText(post.desc)}</p>
              <Button secondary text='Read More' />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
