import React, { useState, useRef, useEffect } from 'react';
import { FaChevronDown, FaCheck } from 'react-icons/fa';

export const CustomDropdown = ({ 
  options = [], 
  placeholder = "Select an option", 
  label = "", 
  name = "", 
  onChange = () => {}, 
  value = "",
  className = "" 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [dropdownPosition, setDropdownPosition] = useState('bottom');
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (value) {
      const option = options.find(opt => opt.value === value);
      setSelectedOption(option);
    }
  }, [value, options]);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange({
      target: {
        name: name,
        value: option.value
      }
    });
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      {/* Label */}
      {label && (
        <label className="absolute left-4 -top-2.5 bg-white px-2 text-sm text-gray-600 z-10">
          {label}
        </label>
      )}
      
      {/* Dropdown Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white text-left hover:border-gray-400 ${
          isOpen ? 'ring-2 ring-blue-500 border-transparent' : ''
        }`}
      >
        <div className="flex items-center justify-between">
          <span className={selectedOption ? 'text-gray-900' : 'text-gray-500'}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <FaChevronDown 
            className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`} 
          />
        </div>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-32 overflow-auto">
          {options.length === 0 ? (
            <div className="px-4 py-3 text-gray-500 text-sm">No options available</div>
          ) : (
            options.map((option, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleSelect(option)}
                className={`w-full px-4 py-3 text-left hover:bg-blue-50 transition-colors duration-150 flex items-center justify-between ${
                  selectedOption?.value === option.value ? 'bg-blue-50 text-blue-600' : 'text-gray-900'
                } ${index !== options.length - 1 ? 'border-b border-gray-100' : ''}`}
              >
                <span>{option.label}</span>
                {selectedOption?.value === option.value && (
                  <FaCheck className="w-4 h-4 text-blue-600" />
                )}
              </button>
            ))
          )}
        </div>
      )}
    </div>
  );
};
