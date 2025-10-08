import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Userheader() {
    const [isHidden, setIsHidden] = useState(false);
    const location = useLocation();
    const links = [
        { name: 'Home', path: '/' },
        { name: 'About us', path: '/about' },
        { name: 'Contact us', path: '/contact' },
        { name: 'Login', path: '/login' },
    ];
    return (
        // bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500

        <div className='flex items-center p-5 h-30'>
            <div>
                <Link to="/" className="text-3xl font-extrabold bg-gradient-to-r from-blue-500 to-pink-500  bg-clip-text text-transparent">
                    SocietyHub
                </Link>
            </div>

            <div className='hidden md:flex justify-end w-[100%]'>
                {
                    links.map((data, index) => (
                        <Link to={data.path} className={`text-black p-2 font-semibold hover:text-blue-500 hover:transition-all hover:duration-100 ${location.pathname === data.path ? 'text-blue-600' : 'text-black'}`}>
                            {data.name}
                        </Link>
                    ))
                }
            </div>
            <div className='md:hidden '>
                <button onClick={() => {
                    setIsHidden(!isHidden);
                }}>
                    {isHidden ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    ) : (
                        <div className=''>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            <div className='flex flex-col'>
                                {
                                    links.map((data, index) => (
                                        <Link className={`text-black p-2  ${location.pathname === '/' ? 'text-blue-500' : 'text-black'}`}>
                                            {data.name}
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>
                    )}
                </button>
            </div>
        </div>

    )
}
