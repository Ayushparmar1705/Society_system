import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from '../../Pages/Users/Home'
import SignupHook from '../../Hooks/UserHooks/SignupHook'
import LoginHook from '../../Hooks/UserHooks/LoginHook'
import OtpVerification from '../../Hooks/UserHooks/OtpVerification'
import Dashboard from '../../Pages/Auth/chairman/Dashboard'
import MemberHook from "../../Hooks/RoleBasedAuthhook/MemberHook"


export default function Usersroutes() {
  return (
    <Routes>

      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/login' element={<LoginHook></LoginHook>}></Route>
      <Route path='/signup' element={<SignupHook></SignupHook>}></Route>
      <Route path='/otpverification' element={<OtpVerification></OtpVerification>}></Route>
      <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
      <Route path='/member-management' element={<MemberHook></MemberHook>}></Route>
      
    </Routes>
  )
}
