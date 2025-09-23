import { toast } from "react-toastify";
import ManageSociety from "../../Api/MainAdmin/ManageSociety"
import "../../globlecss/styles.css"
import { useNavigate } from "react-router-dom";
export default function ManageSocietyPage({ societyList, loading , handleSearch}) {
  const navigate = useNavigate();
  return (
    <div className=''>
      {loading ? (
        <div><img src='/Assets/loading.gif' alt="loading" className="h-[100px] m-[auto] mt-[100px]"></img></div>
      ) : (
        <div>

          <div className="p-[10px] bg-gray-50 w-[100%]">
            <input onChange={handleSearch} type="search" placeholder="Search society by name" className="border-2 border-gray-200 p-[10px] w-[500px] mt-4 rounded-[10px] block m-[auto] focus:outline-none focus:border-gray-600 focus:transition-all focus:duration-500 "></input>
          </div>
          
          {societyList.length > 0 ? (
            <table className="p-[10px] m-[auto] w-full">
              <td className="header">society name</td>
              <td className="header">email</td>
              <td className="header">phone</td>
              <td className="header">address</td>
              <td className="header">state</td>
              <td className="header">total flats</td>
              <td className="header">total blocks</td>
              <td className="header" colSpan={2}>Action</td>
              {societyList.map((data, index) => (
                <tr key={index} className="border-b-2 border-gray-50 hover:bg-gray-100">
                  <td className="menu-item">{data.society_name}</td>
                  <td className="menu-item">{data.email}</td>
                  <td className="menu-item">{data.phone}</td>
                  <td className="menu-item">{data.address}</td>
                  <td className="menu-item">{data.state}</td>
                  <td className="menu-item myitem">{data.total_flats}</td>
                  <td className="menu-item myitem" >{data.total_blocks}</td>
                  <td className="menu-item"><img className="cursor-pointer hover:bg-gray-200  h-[20px]" src="/Assets/edit.png" alt="Nofound"></img></td>
                  <td className="menu-item"><img className="cursor-pointer hover:bg-gray-200  h-[20px]" src="/Assets/delete.png" onClick={async () => {
                    const result = await ManageSociety.deleteSociety(data.sid);

                    if (result.code === 200) {

                      toast.success("Society deleted succesfully");
                    }
                    else {
                      toast.error("something went error");
                    }
                  }} alt="Nofound"></img></td>
                </tr>
              ))}
            </table>
          ) : (
            <p>No society found</p>
          )}
        </div>
      )}
    </div>
  )
}
