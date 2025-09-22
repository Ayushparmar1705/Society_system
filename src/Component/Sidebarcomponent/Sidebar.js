import React from 'react'
import { FaBuilding, FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const elements = [
    { label: "Flats", icon: <FaBuilding></FaBuilding>, dropdown: ["Add Flats", "Manage Flats"], }
  ]
  return (
    <article>
      <header className='bg-white  shadow h-screen w-[300px] rounded-[5px]'>
        <div className='p-[5px] text-center'>
          <p>Admin</p>
        </div>
        <div>
          {
            elements.map((e, index) => (
              <div key={index} className='p-[10px]  cursor-pointer'>
                <div className='p-[10px] rounded flex items-center  hover:bg-gray-100' onClick={() => {
                  setIsOpen(!isOpen);
                }}  >
                  <p>{e.icon}</p>
                  <p className='cursor-pointer ml-5'>{e.label}</p>
                  <div className='ml-auto'>
                    {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                </div>
                <div className={`transition-all overflow-hidden duration-300 ease-in-out flex flex-col gap-[10px] mt-[10px] p-[10px] rounded ${isOpen ? 'max-h-40  opacity-100' : 'opacity-0 max-h-0'}`}>
                  <Link className='hover:bg-gray-100 p-[10px] rounded' to='/mainadmin/add-society'>Add Flats</Link>
                  <Link className='hover:bg-gray-100 p-[10px] rounded' to='/mainadmin/manage-society'>Manage Flats</Link>
                </div>

              </div>

            ))
          }
        </div>
      </header>
    </article>
  )
}
