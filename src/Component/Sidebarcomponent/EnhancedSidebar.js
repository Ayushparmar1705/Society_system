import React, { useState, useEffect } from 'react'
import { FaBuilding, FaChevronDown, FaUserCog, FaBars, FaTimes, FaHome } from 'react-icons/fa'
import { MdApartment } from 'react-icons/md'
import { Link, useLocation } from 'react-router-dom'

export default function EnhancedSidebar({ isCollapsed = false, setIsCollapsed }) {
  const [openIndex, setOpenIndex] = useState(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  const elements = [
    { 
      label: "Society", 
      icon: <FaBuilding className="text-lg" />, 
      dropdown: [
        { name: "Add Society", path: "/mainadmin/add-society" },
        { name: "Manage Society", path: "/mainadmin/manage-society" }
      ]
    },
    { 
      label: "Blocks", 
      icon: <MdApartment className="text-lg" />, 
      dropdown: [
        { name: "Add Blocks", path: "/mainadmin/add-block" },
        { name: "Manage Blocks", path: "/mainadmin/manage-blocks" }
      ]
    },
    { 
      label: "Flat", 
      icon: <FaHome className="text-lg" />,
      dropdown: [
        { name: "Add Flat", path: "/mainadmin/add-flat" },
        { name: "Manage Flat", path: "/mainadmin/manage-flat" }
      ]
    }
  ]

  const isActiveLink = (path) => {
    return location.pathname === path
  }

  const isActiveParent = (dropdown) => {
    return dropdown.some(item => location.pathname === item.path)
  }

  // Close mobile menu when clicking on a link
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false)
  }

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Auto-expand active parent on desktop
  useEffect(() => {
    if (window.innerWidth >= 1024) {
      elements.forEach((element, index) => {
        if (isActiveParent(element.dropdown)) {
          setOpenIndex(index)
        }
      })
    }
  }, [location.pathname])

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-[60] bg-white shadow-lg p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors touch-manipulation"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle mobile menu"
      >
        {isMobileMenuOpen ? <FaTimes size={20} className="text-gray-700" /> : <FaBars size={20} className="text-gray-700" />}
      </button>


      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:relative top-0 left-0 z-50 h-screen
        transition-all duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        ${isCollapsed ? 'lg:w-20' : 'lg:w-72'}
        w-72
      `}>
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white shadow-2xl h-full flex flex-col border-r border-slate-700">
          {/* Header */}
          <div className={`p-6 border-b border-slate-700 ${isCollapsed ? 'lg:px-4' : ''}`}>
            <div className="flex items-center justify-between">
              <div className={`flex items-center gap-3 ${isCollapsed ? 'lg:justify-center' : ''}`}>
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg">
                  <FaUserCog className="text-white text-xl" />
                </div>
                {(!isCollapsed || isMobileMenuOpen) && (
                  <div>
                    <h1 className="text-lg font-bold text-white">Super Admin</h1>
                    <p className="text-xs text-slate-300">Society Management</p>
                  </div>
                )}
              </div>
              
              {/* Mobile Close Button */}
              <button 
                className="lg:hidden text-slate-300 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FaTimes size={18} />
              </button>
            </div>
          </div>
          
          {/* Navigation Items */}
          <nav className="flex-1 overflow-y-auto py-4">
            <div className="space-y-2 px-3">
              {elements.map((element, index) => (
                <div key={index} className="group relative">
                  {/* Parent Item */}
                  <div 
                    className={`
                      flex items-center p-3 rounded-xl cursor-pointer transition-all duration-200
                      ${isActiveParent(element.dropdown) 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg' 
                        : 'hover:bg-slate-700/50 hover:shadow-md'
                      }
                      ${isCollapsed ? 'lg:justify-center lg:px-4' : ''}
                    `}
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    <div className={`flex items-center ${isCollapsed ? 'lg:justify-center' : 'flex-1'}`}>
                      <span className={`
                        ${isActiveParent(element.dropdown) ? 'text-white' : 'text-slate-300'}
                        transition-colors
                      `}>
                        {element.icon}
                      </span>
                      
                      {(!isCollapsed || isMobileMenuOpen) && (
                        <>
                          <span className={`
                            ml-3 font-medium transition-colors
                            ${isActiveParent(element.dropdown) ? 'text-white' : 'text-slate-200'}
                          `}>
                            {element.label}
                          </span>
                          <div className={`
                            ml-auto transition-transform duration-200
                            ${isActiveParent(element.dropdown) ? 'text-white' : 'text-slate-400'}
                            ${openIndex === index ? 'rotate-180' : ''}
                          `}>
                            <FaChevronDown size={14} />
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Dropdown Menu */}
                  {(!isCollapsed || isMobileMenuOpen) && (
                    <div
                      className={`
                        transition-all duration-300 ease-in-out overflow-hidden
                        ${openIndex === index ? "max-h-48 opacity-100 mt-2" : "max-h-0 opacity-0"}
                      `}
                    >
                      <div className="ml-6 pl-4 border-l-2 border-slate-600 space-y-1">
                        {element.dropdown.map((item, idx) => (
                          <Link 
                            key={idx}
                            className={`
                              block p-3 rounded-lg transition-all duration-200 text-sm
                              ${isActiveLink(item.path) 
                                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-md transform scale-105' 
                                : 'text-slate-300 hover:bg-slate-700/30 hover:text-white hover:pl-5'
                              }
                            `}
                            to={item.path}
                            onClick={handleLinkClick}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Collapsed Tooltip */}
                  {isCollapsed && !isMobileMenuOpen && (
                    <div className="hidden lg:group-hover:block absolute left-20 top-0 z-50 bg-slate-800 text-white px-3 py-2 rounded-lg shadow-lg border border-slate-600 whitespace-nowrap">
                      <div className="text-sm font-medium mb-1">{element.label}</div>
                      {element.dropdown.map((item, idx) => (
                        <Link 
                          key={idx}
                          to={item.path}
                          className="block text-xs text-slate-300 hover:text-white py-1"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </nav>

          {/* Footer */}
          <div className={`p-4 border-t border-slate-700 ${isCollapsed ? 'lg:px-2' : ''}`}>
            {(!isCollapsed || isMobileMenuOpen) && (
              <div className="text-center">
                <p className="text-xs text-slate-400">Version 1.0.0</p>
                <p className="text-xs text-slate-500 mt-1">© 2024 Society System</p>
              </div>
            )}
          </div>
        </div>
      </aside>
    </>
  )
}
