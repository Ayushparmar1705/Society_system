import React from 'react'
import { ManageLogin } from '../../Api/User/ManageLogin'
import { useState } from 'react';
import Login from '../../Pages/Users/Login';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function LoginHook() {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    console.log(email);
    const handleOnChange = (e) => {
        setEmail(e.target.value);
    }
    const handleLogin = async () => {
        console.log(email);
        const data = await ManageLogin.login(email);

        console.log(data);
        if (data.code === 200) {
            toast.success(data.message);
 
            console.log("result = ",data.result);
            
            navigate("/otpverification", { state: { email , society_name : data.result[0].society_name} })

        }
        else {
            toast.error(data.error);
        }
    }




    return <Login handleLogin={handleLogin} handleOnChange={handleOnChange}></Login>
}
