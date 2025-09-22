import "../../globlecss/styles.css"
import LoadingSpinner from "../../Assets/loading.gif";
export default function ManageSocietyPage({ societyList , loading}) {
  return (
    <div className=''>
     {loading ? (
        <div><img src={LoadingSpinner} alt="loading" className="h-[100px] m-[auto] mt-[100px]"></img></div>
     ):(
       <div className=''>
        <input type="search" placeholder="Search society by name" className="border-2 border-gray-200 p-[10px] w-[500px] mt-4 rounded-[10px] block m-[auto] focus:outline-none focus:border-gray-600 focus:transition-all focus:duration-500 "></input>
          {societyList.length>0?(
        <table className="p-[10px] m-[auto] w-full">
          <td className="header">society name</td>
          <td className="header">email</td>
          <td className="header">phone</td>
          <td className="header">address</td>
          <td className="header">state</td>
          <td className="header">total flats</td>
          <td className="header">total blocks</td>
            {societyList.map((data,index)=>(
              <tr key={index} className="border-b-2 border-gray-200 hover:bg-gray-100">
                <td className="menu-item">{data.society_name}</td>
                <td className="menu-item">{data.email}</td>
                <td className="menu-item">{data.phone}</td>
                <td className="menu-item">{data.address}</td>
                <td className="menu-item">{data.state}</td>
                <td className="menu-item">{data.total_flats}</td>
                <td className="menu-item">{data.total_blocks}</td>
              </tr>
            ))}
        </table>
        ):(
          <p>No society found</p>
        )}
      </div>
     )}
    </div>
  )
}
