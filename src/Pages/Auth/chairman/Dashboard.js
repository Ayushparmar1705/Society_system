import React, { useState } from 'react'
import Loginchairmanheader from '../../../Component/Usercomponent/Loginchairmanheader';




export default function Dashboard({ countResidence }) {


  return (
    <div className='flex'>
      <Loginchairmanheader></Loginchairmanheader>

      <div className='w-full'>


        <p>Dashboard</p>
        <div className='p-10 font-bold text-white'>
          <div className='p-5 bg-blue-500 rounded-xl text-center w-[300px]'>
            <p>Total Residence</p>
            <p>{countResidence}</p>
          </div>
        </div>
      </div>

    </div>
  )
}
