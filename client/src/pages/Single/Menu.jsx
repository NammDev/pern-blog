import classNames from 'classnames/bind'
import styles from './Single.module.scss'
import { getPosts } from '~/services/post'
import { useState, useEffect } from 'react'
import Button from '~/components/Button/Button'

const cx = classNames.bind(styles)

function Menu({ cat }) {
  const [posts, setPosts] = useState([])

  const fetchData = async () => {
    try {
      const data = await getPosts(`?cat=${cat}`)
      const shuffledArray = [...data].sort(() => 0.5 - Math.random())
      const fourRandomPosts = shuffledArray.slice(0, 4)
      setPosts(fourRandomPosts)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchData()
  }, [cat])

  return (
    <div className={cx('menu')}>
      <h1>Other posts you may like</h1>
      {posts.map((post) => (
        <div className={cx('post')} key={post.id}>
          <img src={`./../upload/${post?.img}`} alt='' />
          <h2>{post.title}</h2>
          <Button text='Read More' secondary />
        </div>
      ))}
    </div>
  )
}

export default Menu
