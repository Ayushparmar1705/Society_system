import React, { useEffect, useState } from 'react'
import { Membermanagement } from '../../../Api/RolebasedAuth/Chairman/MemberManagement';
import { toast } from 'react-toastify';
import { jwtDecode } from "jwt-decode"
import MemberManagement from '../../../Pages/Auth/chairman/MemberManagement';
export default function MemberHook() {
    const [member, setMember] = useState([]);
    const [loading, setLoading] = useState(true);


    const token = localStorage.getItem("token");
    // const id = jwtDecode(token).id


    const society_name = localStorage.getItem("society_name");




    const fetchMember = async () => {
        try {
            setLoading(true)
            const result = await Membermanagement.allMembers(society_name);
            setMember(result);
            console.log("member management = ",result);
        } catch (err) {
            console.log(err);
            setLoading(false);
        }
        finally {
            setLoading(false);
        }
    }
    const MemberRequest = async () => {
        try {
            const result = await Membermanagement.approveMembers();

            if (result.code === 200) {
                toast.success(result.message);
            }
            else {
                toast.success(result.message);
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        console.log(member);
        fetchMember();
    }, [])
    return <MemberManagement MemberRequest={MemberRequest} member={member} loading={loading}></MemberManagement>
}   
