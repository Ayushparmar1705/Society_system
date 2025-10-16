import React from 'react'
import OtpVerificationpage from '../../Pages/Users/OtpVerificationpage'
import { useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { ManageLogin } from '../../Api/User/ManageLogin';
import {toast} from "react-toastify"
export default function OtpVerification() {
    const location = useLocation();
    const navigate = useNavigate();
    const email = location.state?.email
    const [otp, setOtp] = useState("");
    const handleVerifyotp = async()=>{
        const result = await ManageLogin.verifyOTP(email,otp)
        console.log(result);
        if(result.code === 200)
        {

            toast.success(result.message);
            if(result.role === 'chairman')
            {
                navigate("/dashboard")
            }
            else
            {
                toast.success("Not page found...")
            }
        }
        else
        {
            toast.error(result.message);
        }

    }
    return <OtpVerificationpage otp={otp} setOtp={setOtp} handleVerifyotp={handleVerifyotp}></OtpVerificationpage>
}
