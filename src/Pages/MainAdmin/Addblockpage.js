import { useEffect } from "react"
import { toast } from "react-toastify";
import { Card, CardHeader, CardContent } from '../../Component/UI/Card';
import { PageContainer } from '../../Component/UI/Container';

export default function Addblockpage({ handleOnChange, handleOnClick , societyName}) {
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            toast.success("Please login first");
        }
    })
    return (
        <PageContainer>
            <div className="max-w-2xl mx-auto">
                <Card>
                    <CardHeader gradient={true} className="text-center">
                        <h1 className="text-2xl font-bold text-white">Add New Block</h1>
                        <p className="text-blue-100 mt-1">Register the new block by filling the details below</p>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-6">
                            <div className="relative">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Select Society</label>
                                <select 
                                    name="society_id" 
                                    onChange={handleOnChange}
                                    defaultValue=""
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white"
                                >
                                    <option value="" disabled>Select Society name</option>
                                    {societyName.map((data, index) => (
                                        <option key={index} value={data.sid}>
                                            {data.society_name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            
                            <div className="relative">
                                <input 
                                    type="text" 
                                    name="block_name" 
                                    onChange={handleOnChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all peer placeholder-transparent" 
                                    placeholder="Block Name"
                                />
                                <label className="absolute left-4 -top-2.5 bg-white px-2 text-sm text-gray-600 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600 transition-all">
                                    Block Name
                                </label>
                            </div>
                        </div>
                        
                        <div className="mt-8 text-center">
                            <button 
                                onClick={handleOnClick}
                                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                            >
                                Add Block
                            </button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </PageContainer>
    )
}