import { Icon } from 'lucide-react'
import React, { useState } from 'react'
import { FaBuilding, FaChevronDown, FaChevronUp, FaUserCog, FaBars, FaTimes } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'

export default function Sidebar() {
  const [openIndex, setOpenIndex] = useState(null)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const location = useLocation()

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
    },
    { 
      label: "Flat", 
      dropdown: [
        { name: "Add Flat", path: "/mainadmin/add-flat" },
        { name: "Manage Flat", path: "/mainadmin/manage-flat" }
      ]
    }
  ]

  const isActiveLink = (path) => {
    return location.pathname === path
  }

  // Close sidebar when clicking on a link (mobile)
  const handleLinkClick = () => {
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false)
    }
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="md:hidden  fixed top-4 left-4 z-50  p-2 rounded-lg shadow-lg"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <article className={`fixed md:static top-0 left-0 z-40 transition-transform duration-300 ease-in-out ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      }`}>
        <header className="bg-gradient-to-t from-indigo-500 via-indigo-500 to-indigo-600 text-white shadow h-screen w-[300px] flex flex-col">
          {/* Header */}
          <div className="p-4 text-center flex items-center justify-center gap-3  relative">
            <FaUserCog className="text-blue-500 text-2xl" />
            <p className="text-lg font-semibold">Super Admin</p>
            {/* Close button for mobile */}
            <button 
              className="md:hidden absolute right-4 text-white"
              onClick={() => setIsSidebarOpen(false)}
            >
              <FaTimes size={18} />
            </button>
          </div>
          
          {/* Navigation Items */}
          <div className="mt-4 flex-1 overflow-y-auto">
            {elements.map((e, index) => (
              <div key={index} className="px-3 py-2">
                {/* Parent item */}
                <div 
                  className="p-3 rounded-lg flex items-center hover:bg-blue-400 transition-colors duration-200 cursor-pointer"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="text-lg">{e.icon}</span>
                  <span className="ml-3 font-medium">{e.label}</span>
                  <div className="ml-auto transition-transform duration-200">
                    {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                </div>

                {/* Dropdown */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="ml-6 pl-3 border-l-2 border-blue-300 mt-2 space-y-2">
                    {e.dropdown.map((item, idx) => (
                      <Link 
                        key={idx}
                        className={`block p-2 rounded-lg transition-colors duration-200 hover:bg-blue-400 ${
                          isActiveLink(item.path) ? 'bg-blue-600 font-semibold' : ''
                        }`}
                        to={item.path}
                        onClick={(e) => {
                          e.stopPropagation()
                          handleLinkClick()
                        }}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer for mobile info */}
          <div className="p-4 text-center text-blue-200 text-sm border-t border-blue-400 md:hidden">
            Swipe right to close
          </div>
        </header>
      </article>
    </>
  )
}