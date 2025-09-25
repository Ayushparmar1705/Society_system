import { Key, Mail, Phone } from 'lucide-react';
import React from 'react'

export default function ManageBlockPage({ isLoading, blockList }) {


    return (
        <div className='mt-[10px]'>
            {isLoading ? (
                <div className='w-[100%]'>
                    <img className='h-[100px] w-[100px] m-[auto]' src='/Assets/loading.gif'></img>
                </div>
            ) : (
                <div>
                  
                    <p className='text-[20px] text-center'>Manage Blocks</p>
                     <div className='p-[10px] w-[100%] flex   justify-center'>

                  
                   </div>
                    <div className='flex flex-wrap  mt-[10px] justify-center gap-[10px]'>
                        {blockList.map((data, index) => (
                            <div key={index}>
                                <div className='border-2  border-gray-50 p-[10px] rounded shadow w-[300px] h-[250px] mt-[2px]'>
                                    <div className='bg-blue-600 text-white p-[10px] font-bold rounded'>
                                        <p>{data.block_name}</p>
                                        <p>{data.society_name}</p>
                                    </div>
                                    <div className='flex flex-col p-[10px]'>
                                        <div className='flex p-[10px] items-center'>
                                            <Mail className='text-blue-500 h-[15px] w-[15px]'></Mail>
                                            <p className='ml-[5px]'>{data.email}</p>
                                        </div>
                                        <div className='flex p-[10px] items-center'>
                                            <Phone className='text-blue-500 h-[15px] w-[15px]'></Phone>
                                            <p className='ml-[5px]'>{data.phone}</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}
