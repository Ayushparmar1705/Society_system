import React from 'react'
import Userheader from '../../Component/Usercomponent/Userheader'

import "../../globlecss/styles.css"
export default function Home() {
  return (


    <nav className='w-full'>
      <Userheader></Userheader>
      <div className='absolute left-40 w-80 h-80 bg-blue-200 rounded-full  blur-xl rounded-full mix-blend-multiply animate-blob '></div>
      <div className='flex h-screen w-full rounded-20 w-3/5 relative top-10'>
        {/* bg-gradient-to-r from-blue-500 to-pink-500  bg-clip-text text-transparent */}

        <div className='w-[40%] ml-10 '>
          <p className='p-1 text-blue-400 '>Morden Society Management</p>
          <h1 className='font-bold text-[60px]'>

            Simplify Your  {' '}

            <p className='font-bold text-[60px] bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent'>Society </p>
            <p className='font-bold text-[60px] bg-gradient-to-r from-blue-600 to-blue-900 bg-clip-text text-transparent'>Management</p>
          </h1>
          <p>Streamline operations, enhance security, and improve resident satisfaction with our all-in-one society management platform.

          </p>

          <button className='p-3 bg-gradient-to-r mt-5 from-blue-600 to-blue-900 text-white rounded-[5px] '>Start Free Trial</button>

        </div>
        <div className=' flex justify-end  w-[60%]  h-[500px] p-5'>
          <img className='h-[500px] w-[60%] rounded-lg' src='/Assets/hero-image.jpg'></img>
        </div>




        <div>

        </div>
      </div>

    </nav>

  )
}
