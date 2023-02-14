import classNames from 'classnames/bind'
import styles from './Auth.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Button from '~/components/Button/Button'
import { postRegister } from '~/services/auth'

const cx = classNames.bind(styles)

function Register() {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [err, setErr] = useState(null)

  const postApi = async () => {
    try {
      const data = await postRegister(email, username, password)
      navigate('/login')
    } catch (err) {
      setErr(err.response.data)
    }
  }

  const validate = (email, username, password) => {
    const isValidateEmail = email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    const isValidateusername = username.length >= 3
    const isValidatePassword = password
    if (!isValidateEmail) {
      setErr('Invalid Email')
    } else if (!isValidateusername) {
      setErr('Invalid Username')
    } else if (!isValidatePassword) {
      setErr('Please enter password')
    }
    return isValidateEmail && isValidateusername && isValidatePassword
  }

  const handleRegister = (e) => {
    e.preventDefault()
    validate(email, username, password) && postApi()
  }

  return (
    <div className={cx('auth')}>
      <h1>Register</h1>
      <form>
        <input
          required
          type='text'
          placeholder='Username'
          value={username}
          onChange={(e) => {
            setUsername(e.target.value)
          }}
        />
        <input
          required
          type='email'
          placeholder='email'
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />
        <input
          required
          type='password'
          placeholder='password'
          autoComplete='off'
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        />
        <Button onClick={handleRegister} text='Register' />
        {err && <p>{err}</p>}
        <span>
          Do you have an account? <Link to='/login'>Login</Link>
        </span>
      </form>
    </div>
  )
}

export default Register
