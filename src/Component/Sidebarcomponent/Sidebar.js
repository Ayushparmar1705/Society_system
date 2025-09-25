import React from 'react'
import { FaBuilding, FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  const [openIndex, setOpenIndex] = React.useState(null)

  const elements = [
    { 
      label: "Society", 
      icon: <FaBuilding />, 
      dropdown: [
        { name: "Add Society", path: "/mainadmin/add-society" },
        { name: "Manage Society", path: "/mainadmin/manage-society" }
      ]
    },
    { 
      label: "Blocks", 
      icon: <FaBuilding />, 
      dropdown: [
        { name: "Add Blocks", path: "/mainadmin/add-block" },
        { name: "Manage Blocks", path: "/mainadmin/manage-blocks" }
      ]
    }
  ]

  return (
    <article>
      <header className="bg-blue-500 text-white shadow h-screen w-[300px] rounded-[5px]">
        <div className="p-[5px] text-center">
          <p>Admin</p>
        </div>
        <div>
          {elements.map((e, index) => (
            <div key={index} className="p-[10px] cursor-pointer">
              {/* Parent item */}
              <div 
                className="p-[10px] rounded flex items-center hover:bg-gray-100 hover:text-black"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <p>{e.icon}</p>
                <p className="cursor-pointer ml-5">{e.label}</p>
                <div className="ml-auto">
                  {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </div>

              {/* Dropdown */}
              <div
                className={`transition-all overflow-hidden duration-300 ease-in-out flex flex-col gap-[10px] mt-[10px] p-[10px] rounded ${
                  openIndex === index ? "max-h-40 opacity-100" : "opacity-0 max-h-0"
                }`}
              >
                {e.dropdown.map((item, idx) => (
                  <Link 
                    key={idx}
                    className="hover:bg-gray-100 hover:text-black p-[10px] rounded" 
                    to={item.path}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </header>
    </article>
  )
}
