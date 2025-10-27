import React from 'react'
import Loginchairmanheader from '../../../Component/Usercomponent/Loginchairmanheader'

export default function Addstaff({ handleOnChange, handleOnClick }) {
    return (
        <div className='flex'>
            <Loginchairmanheader></Loginchairmanheader>
            <div className='text-center w-full'>

                <div className='w-2/5 m-[auto] border-2 border-gray-50 p-5 mt-10'>
                    <div className='p-5 bg-blue-500 text-white t'>
                        <p>Add staff</p>
                        <p>Fill the below details to add new staff</p>
                    </div>
                    <div className=' w-full'>
                        <div className="p-[10px] relative w-[100%]">
                            <input onChange={handleOnChange} type="name" className="p-[10px] rounded-[5px] border-2 border-gray-300 focus:border-2 focus:border-blue-400 focus:outline-none peer w-[100%] " name="name" placeholder=""></input>
                            <label className="text-gray-700 bg-white absolute left-4 top-5 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:text-sm z-0 peer-placeholder-shown:text-base ">Name</label>
                        </div>
                        <div className="p-[10px] relative w-[100%]">
                            <input onChange={handleOnChange} type="email" className=" p-[10px] rounded-[5px] border-2 border-gray-300 focus:border-2 focus:border-blue-400 focus:outline-none peer w-[100%] " name="email" placeholder=""></input>
                            <label className="text-gray-700 bg-white absolute left-4 top-5 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:text-sm z-0 peer-placeholder-shown:text-base ">Email</label>
                        </div>
                        <div className="p-[10px] relative w-[100%]">
                            <input onChange={handleOnChange} type="phone" className=" p-[10px] rounded-[5px] border-2 border-gray-300 focus:border-2 focus:border-blue-400 focus:outline-none peer w-[100%] " name="phone" placeholder=""></input>
                            <label className="text-gray-700 bg-white absolute left-4 top-5 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:text-sm z-0 peer-placeholder-shown:text-base ">Phone</label>
                        </div>
                        <div className='p-[10px]'>
                            <select onChange={handleOnChange} name='role' className='p-1 rounded border-2 border-gray-100 w-full'>
                                <option selected disabled>Select role</option>
                                <option value='security'>Security</option>
                                <option value='vehical_cleaners'>vehical cleaners</option>
                                <option value='garbege_collector'>garbege_collector</option>
                            </select>
                        </div>
                        <button onClick={handleOnClick} className='p-2 bg-blue-400 hover:bg-blue-300 text-white rounded w-2/5'>Add staff</button>
                    </div>


                </div>
            </div>
        </div>

    )
}
