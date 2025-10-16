import React from 'react'
import OtpVerificationpage from '../../Pages/Users/OtpVerificationpage'
import { useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import { ManageLogin } from '../../Api/User/ManageLogin';
import {toast} from "react-toastify"
export default function OtpVerification() {
    const location = useLocation();
    const email = location.state?.email
    const [otp, setOtp] = useState("");
    console.log(otp);
    const handleVerifyotp = async()=>{
        const result = await ManageLogin.verifyOTP(email,otp)
        console.log(result);
        if(result.code === 200)
        {

            toast.success(result.message);
        }
        else
        {
            toast.error(result.message);
        }

    }
    return <OtpVerificationpage otp={otp} setOtp={setOtp} handleVerifyotp={handleVerifyotp}></OtpVerificationpage>
}
