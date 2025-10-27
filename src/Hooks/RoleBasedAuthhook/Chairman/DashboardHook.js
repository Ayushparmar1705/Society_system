import React, { useEffect, useState } from 'react'

import DashboardManagement from "../../../Api/RolebasedAuth/Chairman/Dashboard"
import Dashboard from '../../../Pages/Auth/chairman/Dashboard';

export default function DashboardHook() {
    const [countResidence, setCountresidnece] = useState(0);
    const totalResidence = async () => {
        const result = await DashboardManagement.countResidence();
        if (result.code === 200) {
            console.log(result.message);
            setCountresidnece(result.message);
            
        }
        else {
            console.log(result.code)
        }
    
    }
    useEffect(()=>{
        totalResidence();
    },[]);
    return <Dashboard countResidence={countResidence}></Dashboard>
}
