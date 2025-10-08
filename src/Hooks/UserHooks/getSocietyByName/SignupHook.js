import React, { useEffect, useState } from 'react'
import Managesignup from '../../../Api/User/ManageSignup';
import Signup from '../../../Pages/Users/Signup';

export default function SignupHook() {
    const [societyData, setSocietyData] = useState([]);
    const [flatCode , setFlatCode] = useState([]);
    const handleOnChange = async(e)=>{
        console.log(e.target.value);
        
        try {
            const result = await Managesignup.getFlatsCode(e.target.value);
            
            if(result.code === 200){
                setFlatCode(result.message);
            }

            
        }
        catch (error) {
            console.log(error);


    }
}

async function fetchSocietyByName() {
        try {
            const result = await Managesignup.getSociety();
   
            setSocietyData(result.message);

        }
        catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        fetchSocietyByName();
    }, []);
    const getFlatsBySocietyName = async(society_id)=>{
        const result = await Managesignup.getFlatsCode(society_id);
        setFlatCode(result.message);
    }
        useEffect(() => {
        fetchSocietyByName();
    }, []);
    return <Signup handleOnChange={handleOnChange} societyData={societyData} flatCode={flatCode} getFlatsBySocietyName={getFlatsBySocietyName}></Signup>
}
