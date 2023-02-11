import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '~/assets/img/logo.png'
import classNames from 'classnames/bind'
import styles from './Navbar.module.scss'

const cx = classNames.bind(styles)

const Navbar = () => {
  const currentUser = true
  const logout = () => {
    console.log('Logout')
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
        {currentUser ? <span onClick={logout}>Logout</span> : <Link to='/login'>Login</Link>}
        <span className={cx('write')}>
          <Link to='/write'>Write</Link>
        </span>
      </div>
    </div>
  )
}

export default Navbar
