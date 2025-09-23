

import { Route, Routes } from "react-router-dom";

import Addsocietyhook from '../../Hooks/MainAdminHooks/Addsocietyhook';
import Layout from '../../Component/Sidebarcomponent/Layout';
import MainAdminLogin from "../../Pages/MainAdmin/MainAdminLogin";
import Managesocietyhook from "../../Hooks/MainAdminHooks/Managesocietyhook";
import Addblockhook from "../../Hooks/MainAdminHooks/Addblockhook";




export default function Adminroutes() {
  return (
    <div>


      <Routes>
        <Route path='/mainadmin/login' element={<MainAdminLogin></MainAdminLogin>}></Route>
        <Route path='/mainadmin/add-society' element={<Layout><Addsocietyhook></Addsocietyhook></Layout>}></Route>
        <Route path="/mainadmin/manage-society" element={<Layout><Managesocietyhook></Managesocietyhook></Layout>}></Route>
        <Route path="/mainadmin/add-block" element={<Layout><Addblockhook></Addblockhook></Layout>}></Route>

      </Routes>

    </div>
  )
}
