import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './Auth.module.scss'
import { useState } from 'react'
import Button from '~/components/Button/Button'

const cx = classNames.bind(styles)

function Login() {
  const [err, setErr] = useState(null)
  const handleChange = (e) => {}
  const handleSubmit = (e) => {}

  return (
    <div className={cx('auth')}>
      <h1>Login</h1>
      <form>
        <input
          required
          type='text'
          placeholder='username'
          name='username'
          onChange={handleChange}
        />
        <input
          required
          type='password'
          placeholder='password'
          name='password'
          onChange={handleChange}
          autoComplete='off'
        />
        <Button onClick={handleSubmit} text='Login' />
        {err && <p>{err}</p>}
        <span>
          Don't you have an account? <Link to='/register'>Register</Link>
        </span>
      </form>
    </div>
  )
}

export default Login
