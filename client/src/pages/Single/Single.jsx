import classNames from 'classnames/bind'
import styles from './Single.module.scss'
import { Link } from 'react-router-dom'
import Menu from './Menu'
import DOMPurify from 'dompurify'
const cx = classNames.bind(styles)

function Single() {
  const post = {
    id: 1,
    username: 'John Doe',
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis! Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis! Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis! Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis! Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis! Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!',
    img: 'https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    userImg:
      'https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  }

  return (
    <div className={cx('single')}>
      <div className={cx('content')}>
        <img src={post.img} alt='' />
        <div className={cx('user')}>
          <img src={post.userImg} alt='' />
          <div className='info'>
            <span>{post.username}</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className={cx('edit')}>
            <Link to={`/write?edit=2`}>
              <img alt='' />
            </Link>
            <img alt='' />
          </div>
        </div>
        <h1>{post.title}</h1>
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(post.desc),
          }}
        ></p>
      </div>
      <Menu />
    </div>
  )
}

export default Single
