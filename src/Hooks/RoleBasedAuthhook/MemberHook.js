import React, { useEffect, useState } from 'react'
import MemberManagement from '../../Pages/Auth/chairman/MemberManagement';
import { Membermanagement } from '../../Api/RolebasedAuth/MemberManagement';
import { toast } from 'react-toastify';

export default function MemberHook() {
    const [member, setMember] = useState([]);
    const [loading, setLoading] = useState(true);
    const fetchMember = async () => {
        try {
            setLoading(true)
            const result = await Membermanagement.allMembers();
            setMember(result);
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
