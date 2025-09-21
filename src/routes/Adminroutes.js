
import MainAdminLogin from '../Component/MainAdminLogin/MainAdminLogin'

import { Route, Routes } from "react-router-dom";
import AddSociety from '../Component/MainAdminLogin/AddSociety';

export default function Adminroutes() {
  return (
    <div>
      <Routes>
        <Route path='/mainadmin/login' element={<MainAdminLogin></MainAdminLogin>}></Route>
        <Route path='/mainadmin/home' element={<AddSociety></AddSociety>}></Route>
      </Routes>
    </div>
  )
}
