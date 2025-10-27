import React, { useEffect, useState } from 'react'
import Managestaff from '../../../Pages/Auth/chairman/Managestaff'
import { StaffManagement } from '../../../Api/RolebasedAuth/Chairman/StaffManagement';
import { jwtDecode } from 'jwt-decode';
import { toast } from 'react-toastify';

export default function ManagestaffHook() {
    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState(false);
    const token = localStorage.getItem("token");
    const decodedToken = jwtDecode(token).id
    const fetchStaff = async () => {
        try {
            setLoading(true);
            const data = await StaffManagement.Managestaff(decodedToken);

            setResult(data.message);
            setLoading(false);
        } catch (err) {
            setLoading(false);
            console.log(err);
        }
        finally {
            setLoading(false);
        }
        return result
    }
    const inActivestaff = async (id) => {
        try {
            const data = await StaffManagement.InActivestaff(id);
            toast.success(data.message);

        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        fetchStaff();
    }, [])
    return <Managestaff inActivestaff={inActivestaff} loading={loading} result={result}></Managestaff>
}
