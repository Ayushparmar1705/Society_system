import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from '../../Pages/Users/Home'
import Signup from '../../Pages/Users/Signup'
import Login from '../../Pages/Users/Login'
import SignupHook from '../../Hooks/UserHooks/getSocietyByName/SignupHook'


export default function Usersroutes() {
  return (
    <Routes>

      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/signup' element={<SignupHook></SignupHook>}></Route>
    </Routes>
  )
}
