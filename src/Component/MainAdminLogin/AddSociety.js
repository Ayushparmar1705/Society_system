import { useEffect } from "react"
import { toast } from "react-toastify";

export default function AddSociety() {
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            toast.success("Please login first");
        }
    })
    return (
        <div className="p-[10px] rounded-5 m-[auto] shadow h-[800px] w-[600px] items-center mt-4">
          <div className="bg-blue-600 text-white">
              <p className=" text-center m-[auto]  p-[10px]">Add new block</p>
            <p className="text-center m-[auto] p-[10px]">Register the new society with fill the below details</p>
          </div>


            <div className="flex">
                <div className="p-[10px] relative w-[100%]">
                    <input type="text" className=" p-[10px] rounded-[5px] border-2 border-gray-300 focus:border-2 focus:border-blue-400 focus:outline-none peer w-[100%] "  placeholder=""></input>
                    <label className="text-gray-700 bg-white absolute left-4 top-5 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:text-sm z-0 peer-placeholder-shown:text-base ">Society Name</label>
                </div>
                <div className="p-[10px] relative w-[100%]">
                    <input type="email" className=" p-[10px] rounded-[5px] border-2 border-gray-300 focus:border-2 focus:border-blue-400 focus:outline-none peer w-[100%] "  placeholder=""></input>
                    <label className="text-gray-700 bg-white absolute left-4 top-5 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:text-sm z-0 peer-placeholder-shown:text-base ">Office email</label>
                </div>
            </div>

            <div className="p-[10px] relative w-[100%]">
                <input type="email" className=" p-[10px] rounded-[5px] border-2 border-gray-300 focus:border-2 focus:border-blue-400 focus:outline-none peer w-[100%] "  placeholder=""></input>
                <label className="text-gray-700 bg-white absolute left-4 top-5 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:text-sm z-0 peer-placeholder-shown:text-base ">Office email</label>
            </div>

            <div className="p-[10px] relative w-[100%]">
                <textarea className=" p-[10px] rounded-[5px] border-2 border-gray-300 focus:border-2 focus:border-blue-400 focus:outline-none peer w-[100%] "  placeholder=""></textarea>
                <label className="text-gray-700 bg-white absolute left-4 top-5 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:text-sm z-0 peer-placeholder-shown:text-base ">Address</label>
            </div>
            <div className="p-[10px] relative w-[100%]">
                <input type="text" className=" p-[10px] rounded-[5px] border-2 border-gray-300 focus:border-2 focus:border-blue-400 focus:outline-none peer w-[100%] "  placeholder=""></input>
                <label className="text-gray-700 bg-white absolute left-4 top-5 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:text-sm z-0 peer-placeholder-shown:text-base ">State</label>
            </div>
            <div>
                <button className="p-[10px] bg-blue-500 w-[200px] rounded-[10px] text-center text-white block m-[auto]">Add society</button>
            </div>

        </div>
    )
}
