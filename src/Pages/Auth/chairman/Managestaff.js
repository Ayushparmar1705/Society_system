import React from 'react';
import Loginchairmanheader from '../../../Component/Usercomponent/Loginchairmanheader';


export default function MemberManagement({ result, loading, inActivestaff , Activestaff}) {
    return (
        <div className='flex items-start '>

            <Loginchairmanheader></Loginchairmanheader>


            {loading ? (
                <img className='m-[auto]' src='/Assets/loading.gif' alt='Noimage'></img>
            ) : (
                <div className='w-full font-bold font-2xl'>
                    <p className='w-full text-center text-2xl'>Security Management</p>
                    <div className='flex  gap-4 p-5 flex-wrap  font-semibold'>
                        {result.map((data, index) => (
                            <div key={index} className='p-5 rounded bg-gray-50 shadow w-[300px]'>
                                <p className='mt-1 p-1  w-[250px]'>Name : {data.name}</p>
                                <p className='mt-1 p-1  w-[250px]'>Email : {data.email}</p>
                                <p className='mt-1 p-1  w-[250px]'>Phone : {data.phone}</p>

                                <p className='mt-1 p-1  w-[250px]'>role : {data.role}</p>
                                {data.is_active === 0 ? (
                                    <button onClick={()=>{
                                        Activestaff(data.sid)
                                    }} className='bg-blue-500 hover:bg-blue-400 text-white p-2 w-full rounded'>Active</button>
                                ) : (
                                    <div className='p-5 flex justify-between w-full'>
                                        <img className='h-[20px] w-[20px]' src='../Assets/edit.png' alt='Noimage'></img>
                                        <img onClick={() => {
                                            inActivestaff(data.sid)
                                        }} className='h-[20px] w-[20px]' src='../Assets/delete.png' alt='Noimage'></img>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
