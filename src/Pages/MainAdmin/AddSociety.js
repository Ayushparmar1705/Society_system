import { useEffect } from "react"
import { toast } from "react-toastify";
import { Card, CardHeader, CardContent } from '../../Component/UI/Card';
import { PageContainer } from '../../Component/UI/Container';

export default function AddSociety({ handleOnChange, handleOnClick }) {
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            toast.success("Please login first");
        }
    })
    return (
        <PageContainer>
            <div className="max-w-4xl mx-auto">
                <Card>
                    <CardHeader gradient={true} className="text-center">
                        <h1 className="text-2xl font-bold text-white">Add New Society</h1>
                        <p className="text-blue-100 mt-1">Register the new society by filling the details below</p>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="relative">
                                <input 
                                    type="text" 
                                    name="name" 
                                    onChange={handleOnChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all peer placeholder-transparent" 
                                    placeholder="Society Name"
                                />
                                <label className="absolute left-4 -top-2.5 bg-white px-2 text-sm text-gray-600 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600 transition-all">
                                    Society Name
                                </label>
                            </div>
                            <div className="relative">
                                <input 
                                    type="email" 
                                    name="email" 
                                    onChange={handleOnChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all peer placeholder-transparent" 
                                    placeholder="Office Email"
                                />
                                <label className="absolute left-4 -top-2.5 bg-white px-2 text-sm text-gray-600 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600 transition-all">
                                    Office Email
                                </label>
                            </div>
                            <div className="relative">
                                <input 
                                    type="text" 
                                    name="phone" 
                                    onChange={handleOnChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all peer placeholder-transparent" 
                                    placeholder="Office Phone"
                                />
                                <label className="absolute left-4 -top-2.5 bg-white px-2 text-sm text-gray-600 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600 transition-all">
                                    Office Phone
                                </label>
                            </div>
                            <div className="relative">
                                <input 
                                    type="text" 
                                    name="state" 
                                    onChange={handleOnChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all peer placeholder-transparent" 
                                    placeholder="State"
                                />
                                <label className="absolute left-4 -top-2.5 bg-white px-2 text-sm text-gray-600 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600 transition-all">
                                    State
                                </label>
                            </div>
                            <div className="md:col-span-2 relative">
                                <textarea 
                                    name="address" 
                                    onChange={handleOnChange}
                                    rows="4"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all peer placeholder-transparent resize-none" 
                                    placeholder="Address"
                                />
                                <label className="absolute left-4 -top-2.5 bg-white px-2 text-sm text-gray-600 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600 transition-all">
                                    Address
                                </label>
                            </div>
                            <div className="relative">
                                <input 
                                    type="number" 
                                    name="total_flats" 
                                    onChange={handleOnChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all peer placeholder-transparent" 
                                    placeholder="Total Flats"
                                />
                                <label className="absolute left-4 -top-2.5 bg-white px-2 text-sm text-gray-600 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600 transition-all">
                                    Total Flats
                                </label>
                            </div>
                            <div className="relative">
                                <input 
                                    type="number" 
                                    name="total_blocks" 
                                    onChange={handleOnChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all peer placeholder-transparent" 
                                    placeholder="Total Blocks"
                                />
                                <label className="absolute left-4 -top-2.5 bg-white px-2 text-sm text-gray-600 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600 transition-all">
                                    Total Blocks
                                </label>
                            </div>
                        </div>
                        <div className="mt-8 text-center">
                            <button 
                                onClick={handleOnClick}
                                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                            >
                                Add Society
                            </button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </PageContainer>
    )
}