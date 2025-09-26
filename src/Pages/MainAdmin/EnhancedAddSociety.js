import { useEffect } from "react"
import { toast } from "react-toastify";
import { FaBuilding, FaEnvelope, FaPhone, FaMapMarkerAlt, FaHome, FaCity } from 'react-icons/fa';

export default function EnhancedAddSociety({ handleOnChange, handleOnClick }) {
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            toast.success("Please login first");
        }
    })

    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
                <div className="flex items-center space-x-3">
                    <FaBuilding className="text-2xl" />
                    <div>
                        <h1 className="text-2xl font-bold">Add New Society</h1>
                        <p className="text-blue-100">Register a new society by filling in the details below</p>
                    </div>
                </div>
            </div>

            {/* Form */}
            <div className="p-6 lg:p-8">
                <form className="space-y-6">
                    {/* Society Name and Email Row */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">
                                <FaBuilding className="inline mr-2 text-blue-500" />
                                Society Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                onChange={handleOnChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                                placeholder="Enter society name"
                            />
                        </div>
                        
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">
                                <FaEnvelope className="inline mr-2 text-blue-500" />
                                Office Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                onChange={handleOnChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                                placeholder="Enter office email"
                            />
                        </div>
                    </div>

                    {/* Phone and State Row */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">
                                <FaPhone className="inline mr-2 text-blue-500" />
                                Office Phone
                            </label>
                            <input
                                type="text"
                                name="phone"
                                onChange={handleOnChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                                placeholder="Enter office phone number"
                            />
                        </div>
                        
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">
                                <FaCity className="inline mr-2 text-blue-500" />
                                State
                            </label>
                            <input
                                type="text"
                                name="state"
                                onChange={handleOnChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                                placeholder="Enter state"
                            />
                        </div>
                    </div>

                    {/* Address */}
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                            <FaMapMarkerAlt className="inline mr-2 text-blue-500" />
                            Address
                        </label>
                        <textarea
                            name="address"
                            onChange={handleOnChange}
                            rows="4"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400 resize-none"
                            placeholder="Enter complete address"
                        />
                    </div>

                    {/* Total Flats and Blocks Row */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">
                                <FaHome className="inline mr-2 text-blue-500" />
                                Total Flats
                            </label>
                            <input
                                type="number"
                                name="total_flats"
                                onChange={handleOnChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                                placeholder="Enter total number of flats"
                                min="1"
                            />
                        </div>
                        
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">
                                <FaBuilding className="inline mr-2 text-blue-500" />
                                Total Blocks
                            </label>
                            <input
                                type="number"
                                name="total_blocks"
                                onChange={handleOnChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                                placeholder="Enter total number of blocks"
                                min="1"
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-6 border-t border-gray-200">
                        <button
                            type="button"
                            onClick={handleOnClick}
                            className="w-full lg:w-auto lg:min-w-[200px] bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Add Society
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
