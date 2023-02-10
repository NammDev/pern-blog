import classNames from 'classnames/bind'
import styles from './Auth.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Button from '~/components/Button/Button'

const cx = classNames.bind(styles)

function Register() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
  })
  const [err, setError] = useState(null)

  const navigate = useNavigate()

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    console.log(inputs)
  }

  const handleSubmit = (e) => {}

  return (
    <div className={cx('auth')}>
      <h1>Register</h1>
      <form>
        <input
          required
          type='text'
          placeholder='username'
          name='username'
          onChange={handleChange}
        />
        <input required type='email' placeholder='email' name='email' onChange={handleChange} />
        <input
          required
          type='password'
          placeholder='password'
          name='password'
          onChange={handleChange}
        />
        <Button onClick={handleSubmit} text='Register' />
        {err && <p>{err}</p>}
        <span>
          Do you have an account? <Link to='/login'>Login</Link>
        </span>
      </form>
    </div>
  )
}

export default Register
