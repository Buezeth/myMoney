import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes, useNavigate, redirect } from 'react-router-dom'
import Home from './assets/pages/Home/Home'
import Login from './assets/pages/Login/Login'
import Signin from './assets/pages/Signin/Signin'
import NavBar from './assets/components/NavBar'
import { useAuthContext } from './assets/hooks/useAuthContext'
import Redirect from './assets/pages/Redirect'

function App() {
  const [count, setCount] = useState(0)
  const { userLogged, user } = useAuthContext()
  const navigate = useNavigate()

  return (
    <>
      <NavBar />
      <Routes>
        <Route element={user? <Home />: <Redirect />} path='/' />
        <Route element={!user ? <Login />:<Redirect />}  path='/Login' />
        <Route element={!user? <Signin />: <Redirect />} path='/SignIn' />
      </Routes>

    </>
  )
}

export default App
