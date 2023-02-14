import { createContext, useState, useEffect } from 'react'
import { getUser, setUser, getLocalRefreshToken } from '~/utils/token'
import { postLogin, postLogout } from '~/services/auth'

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(getUser() || null)

  const login = async (email, password) => {
    const data = await postLogin(email, password)
    setCurrentUser(data)
  }

  const logout = async () => {
    await postLogout(getLocalRefreshToken())
    setCurrentUser(null)
  }

  useEffect(() => {
    setUser(currentUser)
  }, [currentUser])

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>{children}</AuthContext.Provider>
  )
}
