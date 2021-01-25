import { Redirect, Router } from '@reach/router'
import React, { Suspense } from 'react'
import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'
import { NoFound } from './components/NoFound'
import { useOscloudgram } from './Context'
import { Detail } from './pages/Detail'
import { Home } from './pages/Home'
import { NoRegisterUser } from './pages/NoRegisterUser'
import { User } from './pages/User'
import { GlobalStyles } from './styles/GlobalStyles'

const Favs = React.lazy(() => import('./pages/Favs'))

export const App = () => {
  const { isAuth } = useOscloudgram()

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GlobalStyles />
      <Logo />
      <Router>
        <NoFound default />
        <Home path='/' />
        <Home path='/pet/:categoryId' />
        <Detail path='/detail/:detailId' />

        {!isAuth && <NoRegisterUser path='/login' />}
        {!isAuth && <Redirect noThrow from='/favs' to='/login' />}
        {!isAuth && <Redirect noThrow from='/user' to='/login' />}

        {isAuth && <Redirect noThrow from='/login' to='/' />}

        <Favs path='/favs' />
        <User path='/user' />
      </Router>
      <NavBar />
    </Suspense>
  )
}
