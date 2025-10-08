import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <div className='relative bg-gray-100 h-screen flex items-center justify-center shadow-lg'>
            <div className='p-5 bg-white w-96  p-4 text-center  h-98'>
                <div className='bg-blue-500 p-5 text-white rounded-tr-xl  rounded-bl-xl shadow-xl mb-4'>
                    <p className='font-bold text-2xl'>Login to urbanhome</p>
                </div>
                <div className='p-4'>
                    <input className='p-2 border-2 rounded w-full border-gray-200 focus:outline-none  focus:border-blue-400 focus:transition focus:duration-100 rounded-lg' type='text' placeholder='Enter your email'></input>
                </div>

                <div>
                    <button className='text-white p-2 w-3/5 rounded-xl bg-blue-500 hover:bg-blue-400'>Sign up</button>
                </div>
                <div>
                    <span>Not A member <Link to='/signup' className='text-blue-500'>Signup</Link></span>
                </div>
            </div>
        </div>
    )
}
