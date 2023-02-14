import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '~/assets/img/logo.png'
import classNames from 'classnames/bind'
import styles from './Navbar.module.scss'
import { useContext } from 'react'
import { AuthContext } from '~/context/authContext'

const cx = classNames.bind(styles)

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext)
  const navigate = useNavigate()

  const postApi = async () => {
    try {
      await logout()
      navigate('/login')
    } catch (err) {
      console.log(err.response.data)
    }
  }

  return (
    <div className={cx('navbar')}>
      <div className={cx('logo')}>
        <Link to='/'>
          <img src={Logo} alt='' />
        </Link>
      </div>
      <div className={cx('links')}>
        <Link to='/?cat=art'>
          <h6>ART</h6>
        </Link>
        <Link to='/?cat=science'>
          <h6>SCIENCE</h6>
        </Link>
        <Link to='/?cat=technology'>
          <h6>TECHNOLOGY</h6>
        </Link>
        <Link to='/?cat=cinema'>
          <h6>CINEMA</h6>
        </Link>
        <Link to='/?cat=design'>
          <h6>DESIGN</h6>
        </Link>
        <Link to='/?cat=food'>
          <h6>FOOD</h6>
        </Link>
        <span>{currentUser?.username}</span>
        {currentUser ? <span onClick={postApi}>Logout</span> : <Link to='/login'>Login</Link>}
        <span className={cx('write')}>
          <Link to='/write'>Write</Link>
        </span>
      </div>
    </div>
  )
}

export default Navbar
