import { createContext, useContext, useState } from 'react'

const Context = createContext()

export const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() =>
    window.sessionStorage.getItem('token')
  )

  const values = {
    isAuth,
    activeAuth: (token) => {
      setIsAuth(true)
      window.sessionStorage.setItem('token', token)
    },
    removeAuth: () => {
      setIsAuth(false)
      window.sessionStorage.removeItem('token')
    },
  }

  return <Context.Provider value={values}>{children}</Context.Provider>
}

export const useOscloudgram = () => {
  const context = useContext(Context)

  if (!context) {
    throw new Error('The component should be wrapped in Provider')
  }
  return context
}

export default Context
